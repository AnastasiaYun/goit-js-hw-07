const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryEl = document.getElementById('gallery');
  galleryEl.style.width = 700;

  const elements = images.map(image => {

    const elLi = document.createElement('li');
    elLi.insertAdjacentHTML("afterbegin",`<img src='${image.url}' alt='${image.alt}' width='750px'>`);

    return elLi;
  });

  
  galleryEl.append(...elements);


  // galleryEl.insertAdjacentHTML('afterbegin','<img src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width="800">');
  // galleryEl.insertAdjacentHTML('beforeend','<img src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width="700">');
  // galleryEl.insertAdjacentHTML('beforeend','<img src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width="700">');
  // galleryEl.style.width = 700;
  





