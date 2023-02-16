import React from 'react';
import './departments.scss';
import { useNavigate } from 'react-router-dom';

function Departments() {
  const NAVIGATION = useNavigate();
  function route(path) {
    NAVIGATION(path);
  }

  interface Department {
    route: string;
    id: string;
    label: string;
  }

  const DEPARTMENTS: Array<Department> = [
    {
      route: 'science',
      id: 'science',
      label: 'Science'
    },
    {
      route: 'toys&games',
      id: 'toys-and-games',
      label: 'Toys & Games'
    },
    {
      route: 'appliances',
      id: 'appliances',
      label: 'Appliances'
    },
    {
      route: 'arts&crafts',
      id: 'arts-and-crafts',
      label: 'Arts & Crafts'
    },
    {
      route: 'baby',
      id: 'baby',
      label: 'Baby'
    },
    {
      route: 'beauty',
      id: 'beauty',
      label: 'Beauty'
    },
    {
      route: 'books',
      id: 'books',
      label: 'Books'
    },
    {
      route: 'music',
      id: 'music',
      label: 'Music'
    },
    {
      route: 'electronics',
      id: 'electronics',
      label: 'Electronics'
    },
    {
      route: 'clothing',
      id: 'clothing',
      label: 'Clothing'
    },
    {
      route: 'garden&outdoor',
      id: 'garden-and-outdoor',
      label: 'Garden & Outdoor'
    },
    {
      route: 'home&kitchen',
      id: 'home-and-kitchen',
      label: 'Home & Kitchen'
    },
    {
      route: 'video-games',
      id: 'video-games',
      label: 'Video Games'
    },
    {
      route: 'tools',
      id: 'tools',
      label: 'Tools'
    },
    {
      route: 'pet',
      id: 'pet',
      label: 'Pet'
    },
    {
      route: 'office-products',
      id: 'office-products',
      label: 'Office Products'
    },
    {
      route: 'antiques',
      id: 'antiques',
      label: 'Antiques'
    }
  ];
  // finish this up later and add rest of images
  // finish search bar by sunday
  // fix up footer
  // make size of departments workable
  // not in scope to finish each department
  // after this sprint work on figuring out deployment of this home page
  const KEY_DOWN = (e, callback)=> {
    // eslint-disable-next-line no-console
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      callback();
    }
  };
  return (
    <div className="departments">
      {
        DEPARTMENTS.map((department: Department)=> (
          <div
            tabIndex={0}
            key={department.id}
            role="link"
            onKeyDown={(e)=> { KEY_DOWN(e, ()=> { route(`/departments/${department.route}`); }); }}
            onClick={()=> route(`/departments/${department.route}`)}
            className="department"
            id={`department-${department.id}`}
          >
            {/* need to switch from background image to img tag */}
            <div className="overlay-dark" />
            <span>{department.label}</span>
          </div>
        ))
    }
    </div>
  );
}
export default Departments;
