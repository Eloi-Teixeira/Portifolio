import React from 'react';
import IconCSS from '../../assets/icons/IconCSS';
import IconExpress from '../../assets/icons/IconExpress';
import IconJavaScript from '../../assets/icons/IconJavaScript';
import IconMongoDB from '../../assets/icons/IconMongoDB';
import IconNode from '../../assets/icons/IconNode';
import IconReact from '../../assets/icons/IconReact';
import IconTailwind from '../../assets/icons/IconTailwind';
import IconTypeScript from '../../assets/icons/IconTypeScript';

export const TitleDetail = () => {
  return (
    <div className="title-details">
      <span className="long-bar"></span>
      <div>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export const TitleWithDetails = ({ title }: { title: string }) => {
  return (
    <h2>
      {title}
      <TitleDetail />
    </h2>
  );
};

export const IconsContainer = () => {
  const options = React.useMemo(() => {
    return Array.from({ length: 8 }, () => {
      return {
        duration: Math.floor(Math.random() * (15 - 4) + 4) + 's',
        positionY: Math.floor(Math.random() * 90) + '%',
        positionX: Math.floor(Math.random() * 100) + '%',
      };
    });
  }, []);
  return (
    <div className="icon-container">
      <IconReact
        style={{
          animationDuration: options[0].duration,
          top: options[0].positionY,
          left: options[0].positionX,
        }}
      />
      <IconTypeScript
        style={{
          animationDuration: options[1].duration,
          top: options[1].positionY,
          left: options[1].positionX,
        }}
      />
      <IconJavaScript
        style={{
          animationDuration: options[2].duration,
          top: options[2].positionY,
          left: options[2].positionX,
        }}
      />
      <IconCSS
        style={{
          animationDuration: options[3].duration,
          top: options[3].positionY,
          left: options[3].positionX,
        }}
      />
      <IconExpress
        style={{
          animationDuration: options[4].duration,
          top: options[4].positionY,
          left: options[4].positionX,
        }}
      />
      <IconTailwind
        style={{
          animationDuration: options[5].duration,
          top: options[5].positionY,
          left: options[5].positionX,
        }}
      />
      <IconMongoDB
        style={{
          animationDuration: options[6].duration,
          top: options[6].positionY,
          left: options[6].positionX,
        }}
      />
      <IconNode
        style={{
          animationDuration: options[7].duration,
          top: options[7].positionY,
          left: options[7].positionX,
        }}
      />
    </div>
  );
};
