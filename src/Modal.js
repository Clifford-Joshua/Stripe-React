import { useEffect, useRef, useState } from "react";
import { useGlobalContent } from "./content";
import { FaArrowRight } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const Modal = () => {
  const container = useRef(null);
  const { isModalOpen, location, pages } = useGlobalContent();
  const { more } = pages;
  useEffect(() => {
    const { center, bottomDistance } = location;
    const dropdown = container.current;
    dropdown.style.left = `${center}px`;
    dropdown.style.top = `${bottomDistance}px`;
  }, [location]);
  return (
    <div className={`bubble-top ${isModalOpen && "show"}`} ref={container}>
      <div>
        {pages.Alllinks.map(({ title, link }) => {
          const getTitle = title && title;
          return (
            <div className="links-container">
              <h4>{getTitle}</h4>

              <div className={`submenu-center col-2`}>
                {/* =====Product & Solution */}
                {link
                  ? link.map(
                      ({
                        name,
                        icon,
                        text,
                        names,
                        icon_img,
                        id,
                        urls,
                        urlsname,
                      }) => {
                        return (
                          <div className="img-icon" key={id}>
                            <div className="icon-icon_img">
                              {icon && <p className="icon">{icon}</p>}
                              {icon_img && (
                                <img
                                  src={icon_img}
                                  alt={name}
                                  className="icon_img"
                                />
                              )}
                            </div>
                            <div className="smallest-links">
                              <h4>
                                {name}
                                {icon_img && <FaArrowRight className="arrow" />}
                              </h4>
                              <p>{text}</p>
                              {names &&
                                names.map((item, index) => {
                                  return (
                                    <li key={index} className="urlName">
                                      <p className="item">{item}</p>
                                      <LuDot className="dot-icon" />
                                      <FaArrowRight className="arrow-icon" />
                                      <a href={urls[index]}>
                                        {urlsname[index]}
                                      </a>
                                    </li>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      }
                    )
                  : ""}
              </div>
              {/* ====Developers==== */}
              {pages.Alllinks.map(({ name, icon, text, iconslinks }) => {
                return (
                  name && (
                    <div>
                      <header className="dev-header">
                        <div className="dev-head">
                          {icon}
                          <h4 className="dev-name">{name}</h4>
                        </div>
                        <p>Start integrating Stripe’s products and tools</p>
                      </header>
                      <div className="dev-body">
                        {text.map((item, index) => {
                          return <h4 key={index}>{item}</h4>;
                        })}
                      </div>
                      <footer className="dev-footer">
                        {iconslinks.map(({ name, icon }) => {
                          return (
                            <div className="dev-header">
                              {icon}
                              <h4 className="dev-name">{name}</h4>
                            </div>
                          );
                        })}
                      </footer>
                    </div>
                  )
                );
              })}
              {/* =====Resources ===*/}
              {pages.Alllinks.map(({ firsticon, seconficon }) => {
                return (
                  firsticon && (
                    <div>
                      <div className="dev-body">
                        {firsticon.map(({ name, icon }, index) => {
                          return (
                            <div key={index} className="firsticon-header">
                              {icon}
                              <h4 className="firsticon-name">{name}</h4>
                            </div>
                          );
                        })}
                      </div>
                      <div className="dev-footer">
                        {seconficon.map(({ name, icon }, index) => {
                          return (
                            <div key={index} className="dev-header">
                              {icon}
                              <h4 className="dev-name">{name}</h4>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          );
        })}
      </div>
      {pages.page === "Products" ? (
        <div className="more">
          <h4>{more.title}</h4>
          {more.link.map(({ name, text }) => {
            return (
              <>
                <p>{name}</p>
                <p className="more-text">{text}</p>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
