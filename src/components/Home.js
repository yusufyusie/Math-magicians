function getParagraph() {
    const str = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptatibus
    dolorum omnis? Optio facilis animi id saepe magni voluptatibus similique deserunt,
    eum quae tempore, obcaecati, cupiditate officiis illum repellendus molestias aliquid
    atque repudiandae. Assumenda eligendi doloribus nobis vel. Minima tempore necessitatibus
    quae cumque deleniti totam ad vitae veniam in saepe! Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Dolores at corrupti aut, nihil atque asperiores ex eaque. Nostrum qui
    inventore maxime necessitatibus sit ad dolores doloremque laudantium unde voluptatibus.
    Sed, ut iste! Quidem eveniet iste a porro enim ratione assumenda reprehenderit, quaerat facere
    nostrum, iure, eos consequatur tenetur. Et, aperiam?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aspernatur! Blanditiis
    dignissimos sed rerum, animi quia eligendi exercitationem laborum eius, culpa consequuntur
    amet, at ratione! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit,
    consequuntur iure impedit corporis, debitis, dolorum laborum nam ipsum voluptates ducimus
    quisquam sapiente velit quas mollitia.`;
    return str;
  }
  
  function Home() {
    return (
      <div>
        <h3>Welcome to Our page</h3>
        <p>
          {getParagraph()}
        </p>
        <p>
          {getParagraph()}
        </p>
      </div>
    );
  }
  
  export default Home;
  