$(document).ready(function () {
    $.ajax({
        url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
        method: "GET",
        success: function (res) {
            firstTwentyMovies = res.data.movies.slice(0, 20);
            // Grab the buttons
            var buttons = $("button");
            var index = 0;


            buttons.click(function () {
                var currentButton = this.id;

                switch (currentButton) {

                    case "1":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 0;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[0].large_cover_image}" alt="${firstTwentyMovies[0].title}"> 
                             <img src="${firstTwentyMovies[1].large_cover_image}" alt="${firstTwentyMovies[1].title}"> 
                             <h5>${firstTwentyMovies[0].title}</h5>
                             <h5>${firstTwentyMovies[1].title}</h5>
                            `)
                            // <p>${firstTwentyMovies[0].description}</p>
                            // <p>${firstTwentyMovies[1].description_short}</p>
                        break;

                    case "2":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 2;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[2].large_cover_image}" alt="${firstTwentyMovies[2].title}"> 
                             <img src="${firstTwentyMovies[3].large_cover_image}" alt="${firstTwentyMovies[3].title}"> 
                            `)
                        break;

                    case "3":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 4;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[4].large_cover_image}" alt="${firstTwentyMovies[4].title}"> 
                             <img src="${firstTwentyMovies[5].large_cover_image}" alt="${firstTwentyMovies[5].title}"> 
                            `)
                        break;

                    case "4":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 6;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[6].large_cover_image}" alt="${firstTwentyMovies[6].title}"> 
                             <img src="${firstTwentyMovies[7].large_cover_image}" alt="${firstTwentyMovies[7].title}"> 
                            `)
                        break;

                    case "5":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 8;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[8].large_cover_image}" alt="${firstTwentyMovies[8].title}"> 
                             <img src="${firstTwentyMovies[9].large_cover_image}" alt="${firstTwentyMovies[9].title}"> 
                            `)
                        break;

                    case "6":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 10;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[10].large_cover_image}" alt="${firstTwentyMovies[10].title}"> 
                             <img src="${firstTwentyMovies[11].large_cover_image}" alt="${firstTwentyMovies[11].title}"> 
                            `)
                        break;

                    case "7":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 12;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[12].large_cover_image}" alt="${firstTwentyMovies[12].title}"> 
                             <img src="${firstTwentyMovies[13].large_cover_image}" alt="${firstTwentyMovies[13].title}"> 
                            `)
                        break;

                    case "8":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 14;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[14].large_cover_image}" alt="${firstTwentyMovies[14].title}"> 
                             <img src="${firstTwentyMovies[15].large_cover_image}" alt="${firstTwentyMovies[15].title}"> 
                            `)
                        break;

                    case "9":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 16;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[16].large_cover_image}" alt="${firstTwentyMovies[16].title}"> 
                             <img src="${firstTwentyMovies[17].large_cover_image}" alt="${firstTwentyMovies[17].title}"> 
                            `)
                        break;

                    case "10":
                        $("#welcome-box").empty();
                        $("#view-box").empty();
                        index = 18;
                        $("#view-box").append(
                            `<img src="${firstTwentyMovies[18].large_cover_image}" alt="${firstTwentyMovies[18].title}"> 
                             <img src="${firstTwentyMovies[19].large_cover_image}" alt="${firstTwentyMovies[19].title}"> 
                            `)
                        break;

                        // For the prev and next buttons
                        case "prev":
                            console.log("prev");
                            $("#welcome-box").empty();
                            $("#view-box").empty();
                            if (index > 1) {
                            $("#view-box").append(
                                `<img src="${firstTwentyMovies[index - 1].large_cover_image}" alt="${firstTwentyMovies[index - 1].title}"> 
                                 <img src="${firstTwentyMovies[index - 2].large_cover_image}" alt="${firstTwentyMovies[index - 2].title}"> 
                                `)
                                index = index - 2;
                            }
                            else{
                                $("#1").trigger("click");
                            }
                            break;

                        case "next":
                            console.log("next");
                            $("#welcome-box").empty();
                            $("#view-box").empty();
                            if (index < 18 && index != 0) {
                            $("#view-box").append(
                                `<img src="${firstTwentyMovies[index + 1].large_cover_image}" alt="${firstTwentyMovies[index + 1].title}"> 
                                 <img src="${firstTwentyMovies[index + 2].large_cover_image}" alt="${firstTwentyMovies[index + 2].title}"> 
                                `)
                                index = index + 2;
                            }
                            else if(index == 0){
                                $("#welcome-box").empty();
                                $("#view-box").empty();
                                $("#view-box").append(
                                    `<img src="${firstTwentyMovies[index].large_cover_image}" alt="${firstTwentyMovies[index + 1].title}"> 
                                     <img src="${firstTwentyMovies[index + 1].large_cover_image}" alt="${firstTwentyMovies[index + 2].title}"> 
                                    `)
                                    index = index + 1;
    
                            }
                            else{
                                $("#10").trigger("click");
                            }
                            break;

                }
                console.log(index);
            });
        }
    });
});