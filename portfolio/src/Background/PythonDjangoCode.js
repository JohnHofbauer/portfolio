const mytext = `
import csv, io
from django.contrib import messages
from django.contrib.auth.decorators import permission_required
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from django.contrib.auth import get_user_model
import json
from django.db.models import *
import re

from .models import *
from .forms import *

import datetime

# Main Page. 
def index(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Diplays the Main page of the book store, 
    #   -  Users can view ordered books
    #   -  or Search for books. 
    #   -  Navagate to other pages with the headder 
    #   -  Look at the recomended autofill books.
    """
    CurrentUser = request.user.username
    Orders = Order.objects.filter(Username=CurrentUser)
    Recomendations = Book.objects.filter(Title__icontains='har')
    NumberOfResults = Recomendations.count()

    
    context = {'user_id': CurrentUser,
                'Recomendations': Recomendations,
                'Results': NumberOfResults,
                'Orders': Orders}

    # Search by book title
    if 'q' in request.GET and request.GET['q']:
        q = request.GET['q']
        """
        regex = re.compile('[^a-zA-Z_]')

        q = regex.sub(' ', q)
        print(q)
        
        Books = Author.objects.filter(Q(ISBN__Title__icontains=q) | Q(ISBN__Subject__icontains=q) | Q(FullName__icontains=q))
        """
        Books = Book.objects.filter(Q(Title__icontains=q) | Q(Subject__icontains=q)) # test title: "Stand by Me"
        NumberOfResults = len(Books)
        context = {'Books': Books,
                  'user_id': CurrentUser,
                'Results': NumberOfResults,
                'Orders': Orders}
    
    # Search by author 1-order
    elif 'a' in request.GET and request.GET['a']:
        a = request.GET['a']
        
        Authors = Author.objects.filter(FullName__icontains=a) # test authorid: "10077"
        NumberOfResults = len(Authors)
        context = {'Authors': Authors,
                  'user_id': CurrentUser,
                'Results': NumberOfResults,
                'Orders': Orders}

    return render(request, 'index/index.html', context)


@permission_required('admin.can_add_log_entry')
def order(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   THIS PAGE IS TERMANATED
    """
    user_id = request.user.username

    form = CreateOrderForm()

    context = {'user_id': user_id,
                'form': form}

    # Using a redirect, fill in the book isbn automaticly.
    if 'q' in request.GET and request.GET['q']:
        q = request.GET['q']
        
        Books = Book.objects.filter(Title__icontains=q) # test title: "Stand by Me"
        context = {'Books': Books,
                  'user_id': user_id,
                  'form': form}
    
    # submit the order
    if request.method == 'POST':
        form = CreateOrderForm(request.POST)
        if form.is_valid():
            form.save() #Checks the username is unique, and hashes the password.
            title = form.cleaned_data.get('Title')
            messages.success(request, 'purchased  ' + str(title))

        else: 
            print("INVALID")

        

    return render(request, 'order.html', context)

 # loging for commom people, not admin and other workers
def loginpage(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Displays the premade Django loginform for the user to athentacate with
    """
    CurrentUser = request.user.username
    context = {'user_id': CurrentUser}

    if request.method == "POST":
        username = request.POST.get('username')
        passoword = request.POST.get('password')

        user = authenticate(request, username=username, password=passoword)

        # redirect the user to the home page. the login virfication is on the left
        if user is not None:
            login(request, username)
            redirect('index/')
                  
    return render(request, 'registration/login.html', context)

 
def register(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Form to register a user
    """
    user_id = request.user.username
    context = {'user_id': user_id}

    # render the user creation form.
    form = CreateUserForm()
    context = {'user_id': user_id,
                'form': form}
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save() #Checks the username is unique, and hashes the password.
            user = form.cleaned_data.get('username')
            messages.success(request, 'Account created for ' + user)

        else: 
            messages.success(request, 'Account INVALID')

    return render(request, 'registration/register.html', context)



def accountprofile(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Returns in foramtions like orders and friends for the user to look at.
    """
    CurrentUser = request.user.username
    Orders = Order.objects.filter(Username=CurrentUser)
    Friends = TrustFactor.objects.filter(UsernameGiver=CurrentUser).exclude(UsernameReceiver=CurrentUser)

    context = {'user_id': CurrentUser,
                'Orders': Orders,
                'Friends': Friends}

    return render(request, 'profile.html', context)

def Users(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Dispalys a list of other users that can become friends, this will increase their rating
    #   allowing them to get special privliges.
    """
    CurrentUser = request.user.username
    User = get_user_model()
    users = User.objects.all().exclude(username=CurrentUser)
    Friends = TrustFactor.objects.filter(UsernameGiver=CurrentUser).exclude(UsernameReceiver=CurrentUser)


    context = {'user_id': CurrentUser,
                'users': users,
                'Friends': Friends}

    # friend another user. (trust factor)
    if request.method == 'POST':
        inputfeild = dict(request.POST)
        if "Friend" in inputfeild:
            newqueue = TrustFactor(UsernameGiver=CurrentUser,
                                UsernameReceiver=inputfeild["Friend"][0],
                                Score=1)
            
            try:
                TrustFactor.validate_unique(newqueue)
                newqueue.save()
                return render(request, 'Users.html', context)
            except:
                pass
                # allready exsists

        elif "Unfriend" in inputfeild:
        # Remove the friend
            
            try:
                TrustFactor.objects.filter(UsernameGiver=CurrentUser,
                                            UsernameReceiver=inputfeild["Unfriend"][0]).delete()

                return render(request, 'Users.html', context)
            except:
                print("failed")
                # allready exsists


    return render(request, 'Users.html', context)


@permission_required('admin.can_add_log_entry')
def companyView(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Inforamtion for the maniger, displaying the most popular users and their comments. 
    """
    CurrentUser = request.user.username
    Orders = Order.objects.filter(Username=CurrentUser)
    Trust = TrustFactor.objects.values("UsernameReceiver").annotate(Sum("Score")).order_by("-Score__sum")
    Booooks = Order.objects.values("ISBN__Title", "ISBN__Price", "ISBN__StockLevel").annotate(Amount=Sum('Amount')).order_by("-Amount")

    context = {'user_id': CurrentUser,
                'Orders': Orders,
                'Trust': Trust,
                'Books': Booooks}

    return render(request, 'company_view.html', context)




# Use this to display one book.
#@permission_required('admin.can_add_log_entry')
def search_results(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Displays the resuting Book, and the inquired information, 
    #   The Author(s) are stored in another table, so the Natural join of the authors is dispalyed. 
    #   The comments, are on the left along with two buttons to like and dislike.
    #   The CurrentUser can create a comment at the boottom then submit., 
    #   The book can also be purched, and a conforamiton displayed at the bottom of the page. 
    """

    CurrentUser = request.user.username
    CommentForm = CreateCommentForm()
    BookISBN = 0


    context = {'user_id': CurrentUser,
                'CreateCommentForm': CreateCommentForm}

    if 'q' in request.GET and request.GET['q']:
        q = request.GET['q']
        Books = Book.objects.filter(ISBN__icontains=q) 
        CommentScore = Usefulness.objects.values("CommentId", "CommentId__Username", "CommentId__Comment").filter(CommentId__ISBN=q).annotate(Sum("Score")).order_by("-Score")

        Authors = Author.objects.filter(ISBN=q)
        context = {'Books': Books,
                  'user_id': CurrentUser,
                  #'Comments': Comment,
                  'Authors': Authors,
                  'CommentScore': CommentScore, 
                  'CommentForm': CommentForm} 
        BookISBN = q

    # Create a comment
    if request.method == 'POST':
        inputfeild = dict(request.POST)
        if "UserComment" in inputfeild:
            newqueue = Comments(ISBN=Book.objects.filter(ISBN__icontains=BookISBN).first(),
                                Username=CurrentUser,
                                Comment=inputfeild["UserComment"][0])
            try:
                Comments.validate_unique(newqueue)
                newqueue.save()
                
                
                newqueue = Usefulness(Username="fart2345",
                                CommentId=Comments.objects.filter(Username=CurrentUser).last(),
                                Score=1) 
                newqueue.save()  
                return render(request, 'search_results.html', context)

            except: # User has allready comment on this book --> update
                oldcomment = Comments.objects.filter(ISBN=Book.objects.filter(ISBN__icontains=BookISBN).first(),
                                        Username=CurrentUser).first()
                oldcomment.Comment = inputfeild["UserComment"][0]
                oldcomment.save() 

                return render(request, 'search_results.html', context)
                


        if "Upvote" in inputfeild:
            newqueue = Usefulness(Username=CurrentUser,
                                CommentId=Comments.objects.filter(CommentId=inputfeild["Upvote"][0]).first(),
                                Score=1)   
            try:
                Usefulness.validate_unique(newqueue)
                newqueue.save()
                
                return redirect('/searchresults/?q=' + BookISBN)
            except:
                print("FAIL")
                pass

        if "Downvote" in inputfeild:
            try:
                Usefulness.objects.filter(Username=CurrentUser,
                                            CommentId=Comments.objects.filter(CommentId=inputfeild["Downvote"][0]).first()).delete()
                return redirect('/searchresults/?q=' + BookISBN)
            except: pass

        if "Order" in inputfeild:

            stock =  Book.objects.filter(ISBN__icontains=BookISBN).first()
            print("stock ", stock.StockLevel)
            
            if int(inputfeild["Order"][0]) <= 10 and int(inputfeild["Order"][0]) <=stock.StockLevel:

                newqueue = Order(ISBN=Book.objects.filter(ISBN__icontains=BookISBN).first(),
                                Username=CurrentUser,
                                Amount=inputfeild["Order"][0],
                                Price=stock.Price,
                                Date=datetime.datetime.now())   
                
                stock.StockLevel = stock.StockLevel - int(inputfeild["Order"][0])
                stock.Price = stock.Price * 1.12 * 20/stock.StockLevel
                stock.save()
                try:
                    
                    Order.validate_unique(newqueue)
                    newqueue.save()
                    messages.success(request, 'Order for ' + str(inputfeild["Order"][0]) + ' Copies has been placed.')
                except:
                    print("FAIL")
                    pass
            else:
                messages.success(request, 'YOU MUST READ!!! ORDER MAX = 10 BOOKS! NOT:' + str(inputfeild["Order"][0]))

    return render(request, 'search_results.html', context)


@permission_required('admin.can_add_log_entry')
def content_upload(request):
    """
    ###########################################################
    ###                CMPSC431W_Bookstore                  ###
    #   Allows the Admin to upload a CSV file whith the correct format. 
    #
    """
    template = "content_upload.html"
    prompt = {
        'order': 'Order of CSV must be ISBN, ...'
    }
    if request.method == "GET":
        return render(request, template, prompt)
    csv_file = request.FILES['file']

    # check if it is a CSV type. 
    if not csv_file.name.endswith('.csv'):
        messages.error(request, 'Upload must be type CSV')

    data_set = csv_file.read().decode('UTF-8')
    io_string = io.StringIO(data_set)
    next(io_string) # ignore the header


    for column in csv.reader(io_string, delimiter=',', quotechar="|"):
        try:
            correctdate = datetime.datetime.strptime(column[10], "%m/%d/%Y").strftime("%Y-%m-%d")
        except:
            pass
        try:
            numberOfPages = int(column[7])
        except:
            numberOfPages = 1

        _, created = Book.objects.get_or_create(
            ISBN=column[4],
            Title=column[1],
            Subject= "none",
            keywords = "none",
            Price = 20,
            StockLevel = 20,
            NumberOfPages = numberOfPages,
            PublicationDate = correctdate,
            Language = column[6],
            Publisher = column[11]
        )


    #Remove the old objects.
    Author.objects.all().delete()

    for column in csv.reader(io_string, delimiter=',', quotechar="|"):

        for author in column[2].split("/"):

            _, created = Author.objects.get_or_create(
                ISBN=Book.objects.filter(ISBN=column[4]).first(),
                FullName=author,
            )
    context = {}
    return render(request, template, context)`;

export default mytext;
