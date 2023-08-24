let project_id = localStorage.getItem('Progect_id');

let Project = myprojects.find((i) => i.id == project_id);
let swiperWrapper = document.querySelector(".swiper-wrapper");
  
let projectItmes = Project.imgs.map((itme) => {
return `
  <div class="swiper-slide  img">
    <img src="assets/img/projects/${itme}" alt="">
  </div>
`;
});
swiperWrapper.innerHTML = projectItmes.join("");