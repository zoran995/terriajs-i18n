"use strict";

import Terria from "../Models/Terria";
import raiseErrorToUser from "../Models/raiseErrorToUser";

/**
 * Updates the  {@link Terria} when the window's 'hashchange' event is raised.  This allows new init files and
 * "start=" URLs to be loaded just by changing the hash portion of the URL in the browser's address bar.
 *
 * @param  {Terria} terria The Terria instance to update.
 * @param {Window} window The browser's window DOM object.
 */
export default function(terria: Terria, window: Window) {
  window.addEventListener(
    "hashchange",
    async function() {
      try {
        await terria.updateApplicationUrl(window.location.toString());
        await terria.loadInitSources();
      } catch (e) {
        raiseErrorToUser(terria, e);
      }
    },
    false
  );
}