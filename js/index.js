window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 500) nav.className = ''; else nav.className = 'scroll';
};
