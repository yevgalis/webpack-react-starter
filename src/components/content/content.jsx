import React from 'react';
import PropTypes from 'prop-types';
import './content.css';

const Content = ({ name = 'User' }) => {
  return (
    <div>
      <h2 className="content-title">{name}, hello!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione molestias neque qui veritatis dolore velit provident quisquam nostrum. Voluptatum ex vel, nobis, tenetur ad delectus sed itaque, nisi minima necessitatibus illum perspiciatis consequatur. Corrupti qui nemo unde quae atque quam cupiditate itaque, dolorum voluptatibus labore dolorem ipsam sequi eaque? Expedita a enim sint obcaecati blanditiis at officia. Vel necessitatibus inventore ad aperiam alias ducimus quod magnam expedita aut ipsum, nesciunt reiciendis quos explicabo quis quas numquam tempore velit totam similique minima saepe! Illum modi explicabo odit ipsum, a reiciendis libero dicta repellat voluptas fugiat quos, ratione eius eaque error!</p>
    </div>
  );
};

Content.propTypes = {
  name: PropTypes.string
};

export default Content;
