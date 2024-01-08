# Measure Tool

The `MlMeasureTool` facilitates the measurement of either area or length on a map. It integrates with a feature editor component (MlFeatureEditor) to allow users to draw geometries (polygons or lines) directly onto the map. This component is versatile, supporting both polygon and line measurements, with configurable units of measurement.

# Functionality:

- **Measurement Types:** The component can measure either areas (polygons) or lengths (lines), determined by the measureType prop.

- **Units of Measurement:** It supports various units of measurement (like kilometers, miles), specified through the unit prop. The display adjusts automatically between square units for area measurement and linear units for length.

- **Measurement Calculation:** When a geometry is drawn or modified, the component calculates the area (in square units) or length (in linear units) of the feature. For areas, the calculation is done in square kilometers or square miles, and for lengths, in kilometers or miles. The component can also display smaller units (meters or inches) for more precise measurements.

- **Dynamic Display:** The calculated measurement is dynamically displayed on the UI. The display format changes based on the size of the area or length measured - it shows larger units for larger measurements and switches to smaller units (like meters or inches) for smaller measurements.

- **Change Handling:** The component has an onChange callback prop, which is triggered every time there's a change in the measurement. This callback receives the new measurement value, the unit of measurement, and the corresponding GeoJSON object.

- **Feature Editing Integration:** It integrates with the MlFeatureEditor component for the actual drawing of geometries. The mode of this editor is determined by the measurement type (polygon or line).

- **Responsive Design:** The component updates its state and UI based on changes in the selected features or unit of measurement.

**Note:** The component contains internal functions to convert units and calculate the display label, ensuring that the measurements are displayed in an appropriate and user-friendly format. Additionally, the component has default props set for measurement type (line) and unit (kilometers), providing default behavior if these props are not explicitly provided.

## Basic Usage


## Advanced Usage

<iframe
  id="iframe--core-maplibremap--style-change-config"
  title="Style Change Config"
  src="https://mapcomponents.github.io/react-map-components-maplibre/iframe.html?viewMode=story&amp;id=mapcomponents-mlmeasuretool--measure-line"
  allowfullscreen=""
  loading="lazy"
  style={{ width: "100%", height: "500px", border: "0px none" }}
></iframe>

## Links