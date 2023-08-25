let project_id = localStorage.getItem('Progect_id');

let Project = myprojects.find((i) => i.id == project_id);

let portfolio_title = document.querySelector(".portfolio-title");

portfolio_title.innerHTML = Project.name;



let portfolio_info = document.querySelector(".portfolio-info");

let info =`

  <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: ${Project.filter}</li>
              <li><strong>Project date</strong>:  ${Project.date}</li>
              <li><strong>Project URL </strong>: <a href=" ${Project.live}">  live Demo</a></li>
              <li><strong>Project Code Link </strong>: <a href="${Project.gith}">  Code</a></li>
            </ul>
            <p> ${Project.desc}" </p>

      `



portfolio_info.innerHTML = info;



let swiperWrapper = document.querySelector(".swiper-wrapper");
  
let projectItmes = Project.imgs.map((itme) => {
return `
  <div class="swiper-slide  img">
    <img src="assets/img/projects/${itme}" alt="">
  </div>
`;
});
swiperWrapper.innerHTML = projectItmes.join("");