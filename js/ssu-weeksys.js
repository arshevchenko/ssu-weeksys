var getNumerator=function(){var a=new Date,b=a.getMonth()<8?a.getFullYear()-1:a.getFullYear(),c=new Date(b,8,1),d=Math.round((a-c)/6048e5);return d%2?"знаменатель":"числитель"};$("#ssu-weeksys").html(getNumerator());