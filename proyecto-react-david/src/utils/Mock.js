const libros = [
    {id: 1 , categoria: 'realismo' , foto: 'https://imagessl8.casadellibro.com/a/l/t5/08/9788497592208.jpg', Titulo: 'Cien años de soledad', Precio: '2'},
    {id: 2 , categoria: 'ficcion' , foto: 'https://www.plazayjanescolombia.com/wp-content/uploads/1ae530d553804c97ae191adc18696baf.jpg', Titulo: 'La vuelta al mundo en ochenta días', Precio: '2'},
    {id: 3 , categoria: 'ficcion' , foto: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ca/21/ca2172fc190516f831ee04d26910626a.jpg', Titulo: 'Dune', Precio: '3'},
    {id: 4 , categoria: 'clasicos' , foto: 'https://images-na.ssl-images-amazon.com/images/I/81pWlvxmVQL.jpg', Titulo: 'The sun also rises', Precio: '4'},
    {id: 5 , categoria: 'clasicos' , foto: 'http://i2.wp.com/uncorkedcanvas.com/blog/wp-content/uploads/2016/05/Alice-Wonderland.jpg', Titulo: 'Alice in wonderland', Precio: '4'},
    
]

export  const task = new Promise((res, rej) => {

  setTimeout(() => {
    res(libros);
  }, 3000);
});
