import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import vino1 from "../images/vino1.png";
import vino2 from "../images/vino1.png";
import vino3 from "../images/vino3.png";

export default class Test extends React.Component {
  state = {
    activeItemIndex: 1, // Establece el índice inicial en 1 para que el activeItem esté en el centro.
  };

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
    } = this.state;

    const images = [vino1, vino2, vino3];

    const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images];

    return (
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <ItemsCarousel
          numberOfCards={3}
          gutter={12}
          showSlither={false}
          firstAndLastGutter={true}
          freeScrolling={false}
          infiniteLoop={true}
          activePosition={'center'} // Centra el activeItem

          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}

          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
        >
          {duplicatedImages.map((image, index) => (
            <div key={index} style={{ height: 'auto' }}>
              <img
                src={image}
                alt={`Vino ${index % images.length + 1}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  transform: index - 1=== activeItemIndex ? 'scale(1.2)' : 'scale(1)',
                  transition: 'transform 0.3s',
                }}
              />
            </div>
          ))}
        </ItemsCarousel>
      </div>
    );
  }
}
