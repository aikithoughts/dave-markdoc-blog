const Heading = ({ id = '', level = 1, children, className }) => {
  const Element = `h${level}`;

  return (
    <Element
      id={id}
      className={['heading', className].filter(Boolean).join(' ')}
    >
      {children}
    </Element>
  );
};

export default Heading;