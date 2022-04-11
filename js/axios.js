        axios({ 
            method:"get",
            url:"https://api.unsplash.com/photos/random?client_id=SimPJjq0hbwgyusuIUFKU3PgL_gE_rR4isVenydqZd8"
        })
        .then(response => { 
            if(response.status == 200) { 
            console.log(response.data.urls.full); 
            $('body').css("background-image",`url(${response.data.urls.raw})`) 
            $('body').css("background-repeat","no-repeat")  
            axios({ 
                method:"get", 
                url:"https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=59ca6a81ca32075bcfc037a8db31f512&units=metric"
            }) 
            .then(response => { 
                if(response.status == 200) { 
                console.log(response.data.weather);
                $('#weatherCity').append(`${response.data.name}`)  
                $('#weatherCity').css("color","white")
                $('#weatherTemp').append(`${response.data.main.temp}`, "°")  
                $('#weatherTemp').css("color","white")
                $('#weatherMain').append(`${response.data.weather[0].main}`) 
                $('#weatherMain').css("color","white")
                }
                else{ 
                console.log("Please try again later")
                }
            })
                axios({ 
                    mathod:"get", 
                    url:"https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=text&lang=en"
                })  
                .then(response => { 
                    if(response.status == 200) { 
                    console.log(response); 
                    $('#forismatic').append(`${response.data}`)  
                    $('#forismatic').css("color","white")
                } 
                })
                .catch(error => { 
                    console.log(error);
                })
            .catch(error => { 
                console.log(error);
            })
            $('img').attr('src',`${response.data.urls.raw}`) 
            } 
            else{ 
                console.log("Please try again later");
            }
        })
        .catch(error => { 
            console.log(error);
        })  

        
        $('#time').append(moment().format('LTS'))   

       
        
        


