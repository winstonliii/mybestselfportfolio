import React from 'react';
import styles from './ThreeJsContainer.module.css';

const ThreeJsContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${styles.disableSelection}`}>
        <div className="row">
          <div className="col">
            <div className="col-md-6">
              <div className="row">
                
                <div className="col">
                  {/* Add the button component here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footer} ${styles.disableSelection}`}>
        <div className="row">
          
        </div>
      </div>
    </div>
  );
};

export default ThreeJsContainer;