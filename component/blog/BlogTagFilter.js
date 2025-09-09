"use client";
import { VerdaContext } from '@/context/VerdaContext'
import React, { useContext } from 'react'

const BlogTagFilter = () => {
  const {selectedBlogTags,handleBlogTagSelection} = useContext(VerdaContext)
  const tags = [
    'Electronic',
    'Furniture',
    'Fashion',
    'Food',
    'Travel',
    "Classic Door",
    "Modern Door",
    "Glass Doors",
    'Jewelry',
    'Ring',
    "Cake Shop",
  ]
  return (
    <section className="sidebar-single-area product-tags-area">
        <h3 className="sidebar-single-area__title">Blog tags</h3>
        <div className="tags">
            <ul className='blog-tag-lists'>
              {tags.map(tag => (
                <li 
                  key={tag}
                  className={`blog-tag-list-items ${selectedBlogTags.includes(tag)? 'active':''}`}
                  onClick={() => handleBlogTagSelection(tag)}
                  >
                    {tag}
                  </li>
              ))}
            </ul>
        </div>
    </section>
  )
}

export default BlogTagFilter