(() => {

    //make an AJAX request using FETCH API 
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {
            // debugger;
            console.log(data.profname);
            setContent(data);
            //handleData
            //here's where you would call the function that puts the pieces on the page
        })

    .catch((err) => {
        console.log(err);
    })

    function setContent(data) {
        //set course name
        let coursename = document.querySelector('.course-name');
        coursename.innerHTML = data.coursename;

        let coursecode = document.querySelector('.course-code')
        coursecode.innerHTML = data.coursecode;

        //set prof name
        let profName = document.querySelector('.prof-name')
        profName.innerHTML = `Professor- ${data.profname}`;




        //set class times
        let classTimeList = document.querySelector(".list-inline");
        let content = '';

        data.classtime.forEach(time => {
            content += `<li>${time}</li>`;
        })
        classTimeList.innerHTML = content;
        //set 
    }

})();