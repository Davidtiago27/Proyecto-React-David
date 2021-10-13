const libros = [
    {id: 1 , categoria: 'realismo' , foto: 'https://imagessl8.casadellibro.com/a/l/t5/08/9788497592208.jpg', Titulo: 'Cien años de soledad', Precio: '2' , descripcion: 'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.'},
    {id: 2 , categoria: 'ficcion' , foto: 'https://www.plazayjanescolombia.com/wp-content/uploads/1ae530d553804c97ae191adc18696baf.jpg', Titulo: 'La vuelta al mundo en ochenta días', Precio: '2' , descripcion: 'La vuelta al mundo en ochenta días es una novela del escritor francés Julio Verne publicada por entregas en Le Temps desde el 7 de noviembre hasta el 22 de diciembre de 1872, el mismo año en que se sitúa la acción. Después, sería publicada de manera íntegra el 30 de enero de 1873.​'},
    {id: 3 , categoria: 'ficcion' , foto: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ca/21/ca2172fc190516f831ee04d26910626a.jpg', Titulo: 'Dune', Precio: '3' , descripcion: 'Dune es una novela de ciencia ficción escrita por Frank Herbert en 1965. Su éxito fue rotundo; en 1966 ganó el Premio Hugo y en 1965 la primera edición del Premio Nébula a la mejor novela de ciencia ficción. Publicada en español por la editorial Acervo en 1975, abrió una de las sagas más importantes de la literatura fantástica y de ciencia ficción. '},
    {id: 4 , categoria: 'clasicos' , foto: 'https://images-na.ssl-images-amazon.com/images/I/81pWlvxmVQL.jpg', Titulo: 'The sun also rises', Precio: '4' , descripcion: 'Fiesta es una novela de Ernest Hemingway. Escrita en 1926, está considerada la primera obra de importancia del autor. En ella describe la historia de una serie de personajes pertenecientes a la llamada Generación perdida del período de entreguerras, en una serie de viajes en Francia y España.'},
    {id: 5 , categoria: 'clasicos' , foto: 'http://i2.wp.com/uncorkedcanvas.com/blog/wp-content/uploads/2016/05/Alice-Wonderland.jpg', Titulo: 'Alice in wonderland', Precio: '4' , descripcion: 'Las aventuras de Alicia en el país de las maravillas, comúnmente abreviado como Alicia en el país de las maravillas, es una novela de fantasía escrita por el matemático, lógico, fotógrafo y escritor británico Charles Lutwidge Dodgson, bajo el seudónimo de Lewis Carroll, publicada en 1865.'},
    
]

export  const task = new Promise((res, rej) => {

  setTimeout(() => {
    res(libros);
  }, 3000);
});
