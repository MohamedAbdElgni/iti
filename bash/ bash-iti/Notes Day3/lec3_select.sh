#!/usr/bin/bash
<<COMMENT
select var in mina ahmed ali mona mark exit
do 
    echo Input = $var
    case $var in 
        mina )
         echo BigBoss
        ;;
        ahmed )
        echo BigBoss2
        ;;
        ali)
        echo Normal user1
        ;; 
        mona)
        echo BigBoss3
        ;; 
        mark)
            echo Normal user2  
        ;;
        exit)
            echo "Good Bye "
            break
        ;;
        *)
            echo default
        ;;
    esac  

done 
COMMENT
<<COMMENT
PS3=">>"
select var in mina ahmed ali mona mark exit
do 
    echo Input Var= $var
    echo Input REPLY= $REPLY
    case $REPLY in 
        1 )
         echo BigBoss
        ;;
        2 )
        echo BigBoss2
        ;;
        3)
        echo Normal user1
        ;; 
        4)
        echo BigBoss3
        ;; 
        5)
            echo Normal user2  
        ;;
        6)
            echo "Good Bye "
            break
        ;;
        *)
            echo default
        ;;
    esac 
done 
COMMENT

: '
arr=(5 2 3 4 10)
sum=0
count=${#arr[@]}
for i in ${arr[@]}
do 
    # echo $i
    # ((sum=sum+i))
    sum=$((sum+i))
done 
echo $sum
echo $(( $sum / $count ))

'

# function sum() {
#   #echo sum1
#   echo $(($1+$2))
# }
# #call 
# sum 10 20
: ' 
sum2(){
    #echo "sum2"
    echo $(($1+$2))
}
 
result=`sum2 30 40`
echo $result

sum3(){
    #echo "sum2"
    return $(($1+$2))
}
sum3 40 40
echo $?
'
: '
x=10
test(){
 echo "inside Function" $x 
 x=20 
}
test
echo "After Function" $x 
'

set -x  #enable Debug
echo "start "

test(){
  local y=10
 echo "inside Function" $y 
  y=20 
}
test
echo "After Function" $y 




set +x #Disable Debug
echo "Finish "










