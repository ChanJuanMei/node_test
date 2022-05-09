import sys
for i in range(len(sys.argv)):
    print('arg'+str(i),sys.argv[i])
a = 2
b = 4
if  a ==1:
    print ("true")
else:
    print("false")
    

if b > 1:
    print("b>1")
    if b > 2:
        print("b > 2")
        
if a < 1:
   print("a=",a)  
elif  a > 3:
   print("a>3")
else:
   print("c")