const mytext = `
function vec2 = homo2cart2d(vec3)
    x = vec3(1)/vec3(3);
    y = vec3(2)/vec3(3);
    vec2 = [x; y];
end

function delta = Euclideandistance(vec3point1, vec3point2)
    delta = sqrt((vec3point1(1)-vec3point2(1))^2 + (vec3point1(2)-vec3point2(2))^2 + (vec3point1(3)-vec3point2(3))^2);
end

function vec3 = homo2cart3d(vec4)
    x = vec4(1)/vec4(4);
    y = vec4(2)/vec4(4);
    z = vec4(3)/vec4(4);
    vec3 = [x; y; z];
end

function p = myp(vue)
    % K = Intrinsics
    K = padarray(vue.Kmat,[0 1],0,'post');

    % R = rotation 3x3 padded 
    R = padarray(vue.Rmat,[1 1],0,'post');
    R(4, 4) = 1;

    % IC = the position matix
    IC = padarray(vue.position'*-1,[0 3],0,'pre');
    IC(1, 1) = 1;
    IC(2, 2) = 1;
    IC(3, 3) = 1;
    IC = padarray(IC,[1 0],0,'post');
    IC(4, 4) = 1;

    % P = KR{I|-C}
    p = K * R * IC;
end

function [newx, newy] = increaselinesegment(line, amount)
    slope = abs((line(2,1)-line(2,2))/(line(1,1)-line(1,2)));
    newx = line(1, 1) + amount;
    newy = line(2,1) + amount*slope;
end

function [newx, newy] = increaselinesegment2(line, amount)
    slope = abs((line(2,1)-line(2,2))/(line(1,1)-line(1,2)));
    newx = line(1, 1) - amount;
    newy = line(2,1) + amount*slope;
end`;

export default mytext;
