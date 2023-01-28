const PrimitiveRender = () => {
  const title = "Taliw";
  return (
    <h1>
      Book name: {title} <HotTag />
    </h1>
  );
};

const HotTag = () => {
  return <span>Hot!!</span>;
};

export default PrimitiveRender;
