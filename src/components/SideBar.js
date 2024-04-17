import React from 'react';
import '../app/globals.css'
const SideBar = () => {
  return (
    <div class="container-fluid">
    <div class="row">
      <div class=" bg-dark sidebar d-flex flex-column">
        {/* <!-- Top icons --> */}
        <div class="text-center mt-3">
          <i class="fas fa-home text-white fa-2x d-block"></i>
          <i class="fas fa-user text-white fa-2x mt-3 d-block"></i>
        </div>
        {/* <!-- Bottom icon --> */}
        <div class="text-center mt-auto mb-3">
          <i class="fas fa-cog text-white fa-2x d-block"></i>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default SideBar;