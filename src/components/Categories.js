import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => {
  return (
    <div>
      <h3 className='categories__title'>{title}</h3>
      {children}
    </div>
  );
};

export default Categories;
