function jsTask(){
    let name='Omolola Odunowo';
    let courses=['HTML','CSS', 'JavaScript'];
    console.log(name);
    console.log(courses);
    let i;
    

        for (i=0; i < 200; i+=2){
            if (courses.length % 2 === 0){
                document.write(i + " ");
                    } 
                    for (i=1; i < 200; i+=2){
                        if(courses.length % 2 !== 0){

                         document.write(i + " ");
                        }
                    }
}

}

jsTask(); //It will output odd numbers since the number of my courses are 3