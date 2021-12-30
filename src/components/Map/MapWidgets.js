import { useEffect } from 'react';
import Home from '@arcgis/core/widgets/Home';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';

const MapWidgets = ({ view }) => {
  useEffect(() => {
    view.ui.add(
      new Home({
        view: view,
      }),
      'top-left'
    );

    // view.ui.add(
    //   new ScaleBar({
    //     view: view,
    //   }),
    //   'bottom-left'
    // );

    view.ui.add(
      new BasemapToggle({
        view: view,
        nextBasemap: 'topo',
      }),
      'bottom-left'
    );

    view.ui.add(
      new Bookmarks({
        view: view,
        editingEnabled: true,
      }),
      'bottom-right'
    );
  }, []);

  return null;
};

export default MapWidgets;
