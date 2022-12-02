 /****************************************
  javascript class variables & datatype
  *****************************************/

        //Just print one variable on console //

        let FirstName ="guru";
        console.log(FirstName);

       //checking the diff b/w var and let//

        var MiddleName;
        console.log(MiddleName);
          var MiddleName="barath";
        console.log(MiddleName);

        let MiddleName1;
        console.log(MiddleName1);
          MiddleName1="bharathi";
        console.log(MiddleName1);

        {
            var a = 10;
            let b = 10;
            console.log(a+5,b+5);
        }

       // console.log(a+5,b+5);

       //var is global scope and let is local scope example:var is like bird cannot barrier it. but let is like animal can be barrier not coming out of this.//

        //variables declared with second value //
        var LastName ="k";
              LastName="s";
        console.log(LastName);
        
        let Student1 ="babu";
            Student1="suresh";
        console.log(Student1);
        
        const Student2 ="babu";
         //   Student2="suresh";
        console.log(Student1);  

           /*************
               data type
         **********************/
        
         var tel=1234567890;
         console.log(tel);

         var tel2=123456789012345678901234677890;
         console.log(tel2);

         var tel2=123456789012345678901234677890n;
         console.log(tel2);

         var english="English is global language";
         console.log(english);
         var english2='English is global language';
         console.log(english2);
         
         var a = 5;
         var b = 10;
         var c = a>b;
         console.log("The Answer is :",c);

         // ',means is in the same line' '+ means concatenation the valuses into one'//

         let und;
         console.log(und);

         const check =null;
         console.log(typeof(check));
         console.log(check);

         var check2 =null;
         console.log(typeof(check));

         //Difference between Primitive & reference Data Type
       /*JavaScript has two different types of values:
            @Primitive values
            @Reference values/reference values are objects that might consist of multiple values.*/

          /**************
           Object Key Values Manipulation
           ***************/
            //object key delete 
             let car={
              model:"BMW i8",
              power:"10,000 hw",
              speed:"400km/h",
              color:"Black",
              no:"TN76 KG066"
             }
            //Addding new property in last position
            car.type="petrol";


            //delete property
            //The delete operator  has no effect on variables or functions.
            //The delete keyword does not delete inherited properties, but if you delete a prototype //property, it will affect all objects inherited from the prototype.
             delete car["power"];
             //(or) delete car.power


            //renaming the property //only copying the element
            car.newno=car.no;//copy &delete
            delete car.no;

            //
             console.log(car);

            /****************
                  Task- storing function,array,object in objects
             ****************/
      
   //Object properties can be both primitive values, other objects, and functions.
  //  Any changes to a copy of an object will also change the original object:

        let objects={
           array:[1,2,3,4,5],
          objecte:{name:"guru",age:21,Education:"BE"},
          functions:function allow(){
             let say =confirm("you are young?");
            return say;
              }
         }
        console.log(objects.array);
        console.log(objects["objecte"]);
        console.log(objects.functions());

      
         