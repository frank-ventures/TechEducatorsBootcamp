import Button from "./button.jsx";

export default function App() {
  return <MyPageComponent />;
}

function MyPageComponent() {
  return (
    <div className="main-display flex">
      <Header />
      <MyGalleryComponent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header flex">
      <h1>My Gallery Page</h1>
      <p>More horrifying fluffballs, probably.</p>
    </div>
  );
}

function MyGalleryComponent() {
  return (
    <>
      <MyImageComponent
        imageUrl="https://images.unsplash.com/25/puppy-love.jpg?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="An absolutely terrifying puppo"
        name="Oslo"
      />
      <Button which={1}>I&apos;ll be the first console log</Button>

      <MyImageComponent
        imageUrl="https://images.unsplash.com/25/puppy-love.jpg?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="An absolutely terrifying puppo"
        name="Otto"
      />
      <Button which={2}>I&apos;ll be the next console log</Button>

      <MyImageComponent
        imageUrl="https://images.unsplash.com/25/puppy-love.jpg?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="An absolutely terrifying puppo"
        name="Otis"
      />
      <Button which={3}>I&apos;ll be the last console log</Button>
    </>
  );
}

function MyImageComponent(props) {
  return (
    <div>
      <h3 className="title flex">Look at him! This is {props.name}</h3>
      <img src={props.imageUrl} alt={props.altText} className="doggo-image" />
    </div>
  );
}

function Footer() {
  return <footer>This page built with React and CSS and Love.</footer>;
}
