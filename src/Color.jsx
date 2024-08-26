import React, { useState } from "react";

export const Color = () => {
  const [colors, setColors] = useState(["#63a1ff", "#FF0040"]);
  const [selectColorId, setSelectColorId] = useState(null);

  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  const handleAddColor = () => {
    setColors([...colors, colors[colors.length-1]]);
  };

  const handleRemoveColor = () => {
    if (colors.length > 1) {
            const colorRemove =
              selectColorId === null ? colors.length - 1 : selectColorId;
      const updatedColors = colors.filter(
        (ele, index) => index !== colorRemove
      );
      setColors(updatedColors);
      setSelectColorId(null);
    }
  };

  const handleChangeColor = (index, newColor) => {
    const updatedColors = colors.map((color, indx) =>
      indx === index ? newColor : color
    );
    setColors(updatedColors);
  };

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={handleRemoveColor}>Remove color</button>
        <button onClick={handleAddColor}>Add color</button>
      </div>
      <div
        className="gradient-preview"
        style={{
          height: "200px",
          backgroundImage,
        }}
      />
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(e) => handleChangeColor(index, e.target.value)}
                  onClick={() => setSelectColorId(index)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <div>Expected output</div>
        <video src="gradient-tool-demo.mp4" autoPlay controls />
      </div>
    </div>
  );
};
