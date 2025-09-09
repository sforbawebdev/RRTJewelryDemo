"use client";
import { VerdaContext } from '@/context/VerdaContext'
import { blogList } from '@/data/Data';
import { useContext } from 'react'
const categories = [
  { name: null, label: 'All Door' },
  { name: 'Electronic', label: 'Electronic' },
  { name: 'Furniture', label: 'Furniture' },
  { name: 'Fashion', label: 'Fashion' },
  { name: 'Food', label: 'Food' },
  { name: 'Travel', label: 'Travel' },
  { name: 'Classic Door', label: 'Classic Door' },
  { name: 'Modern Door', label: 'Modern Door' },
  { name: 'Glass Doors', label: 'Glass Doors' },
  { name: 'Jewelry', label: 'Jewelry' },
  { name: 'Ring', label: 'Ring' },
  { name: 'Cake Shop', label: 'Cake Shop' },
];
const BlogCategoryFilter = () => {
    const {
        handleBlogCategoryFilter,
        activeBlogCategory
    } = useContext(VerdaContext)
    
  return (
    <section className="sidebar-single-area product-categories-area">
        <h3 className="sidebar-single-area__title">Blog categories</h3>
        <ul className="product-categories">
          {categories.map(categoryObj => (
              <li
                  key={categoryObj.name}
                  onClick={() => handleBlogCategoryFilter(categoryObj.name)}
                  className={`cat-item ${activeBlogCategory === categoryObj.name ? 'active' : ''}`}
              >
                  {categoryObj.label} ({categoryObj.name === null ? blogList.length : blogList.filter(product => product.category === categoryObj.name).length})
              </li>
          ))}
        </ul>
    </section>
  )
}

export default BlogCategoryFilter