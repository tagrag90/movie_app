import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'kimchi',
    image: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fjnmall.kr%2Fproduct%2F%25EC%2582%25B0%25EB%2593%25A4%25EB%259E%2598-%25EA%25B9%2580%25EC%259E%25A5-%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598-10kg%2F4986%2F&psig=AOvVaw12zG8JwB_F29RxwQpnEjqu&ust=1591202944665000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjSpYfL4-kCFQAAAAAdAAAAABAD',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fporkboard.han-don.com%2Fporkboard%2Fbbs%2Findex.php%3Fmode%3Dview%26id%3D470%26board%3Dporkboard_121&psig=AOvVaw2cET-xMIvWWTlhhMSmiDH7&ust=1591202989019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOD0-JnL4-kCFQAAAAAdAAAAABAD',
  },
  {
    name: 'Bibimbap',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6896992&psig=AOvVaw1QfF7tWksi4kXXzYX8idH7&ust=1591203012707000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDgxqXL4-kCFQAAAAAdAAAAABAD',
  },
  {
    name: 'Doncasu',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeniusjw.com%2F1864&psig=AOvVaw0F-OHsWrlkJ8ORpNlVxZhu&ust=1591203035765000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCbvLDL4-kCFQAAAAAdAAAAABAT',
  },
  {
    name: 'Kimbap',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhomecuisine.co.kr%2Fhc10%2F83001&psig=AOvVaw1WCZyE6w1CKQ5t7EbCKUBG&ust=1591203074686000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDFpsTL4-kCFQAAAAAdAAAAABAD',
  },

];

export default Food;