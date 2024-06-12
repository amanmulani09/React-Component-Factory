import { useState } from "react";
import { tabHeader, mockTabData } from "./index.mock.ts";
import styles from "./index.module.css";
const TabHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabKeys = mockTabData.tabData.map((item) => item.title);
  return (
    <main className={styles.tabContainer}>
      {mockTabData?.tabData.length > 0 ? (
        <>
          {mockTabData?.tabData.map(
            (Tabitem: tabHeader, index: number) =>
              activeIndex === index && (
                <>
                  <div
                    className={styles.tabHero}
                    style={{ backgroundColor: Tabitem.primaryColor }}
                  >
                    <h2>{Tabitem.title}</h2>
                    {Tabitem.desc}
                  </div>
                  <div className={styles.tabTitle}>
                    {tabKeys.map((item, tabBtnIndex) => (
                      <button
                        onClick={() => setActiveIndex(tabBtnIndex)}
                        key={tabBtnIndex}
                        className={styles.tabButton}
                        style={{
                          backgroundColor:
                            tabBtnIndex === activeIndex
                              ? Tabitem.primaryColor
                              : "#eee",
                          color:
                            tabBtnIndex === activeIndex ? "#ffffff" : "#000000",
                          fontWeight:
                            tabBtnIndex === activeIndex ? "bold" : "normal",
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              )
          )}
        </>
      ) : null}
    </main>
  );
};

export default TabHeader;
