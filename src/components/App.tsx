import * as React from 'react';
import { LayoutProps } from 'piral-core';
import { Menu } from 'piral-menu';

const App: React.FC<LayoutProps> = ({ children }) => (
  <div className="u-height-full" id="main-container">
      <div id="js-toastr-holder"></div>
      <div className="l0fIcr9dWiAQ9EyHeVi9z u-position-relative">
        <nav className="_173Y0-13H9qBNnW43Y0bEU">
          <div
            className="_38hPWQqefrea-pVtCVI4W4 js-old-grid-rezise"
            style={{minWidth: "15em", width: "3em", maxWidth: "1820px"}}
          >
            <div className="_39NsEEJnJHx-YVLZD64Gqb">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.75 24a.743.743 0 01-.53-.22L4.5 13.06a1.488 1.488 0 01-.439-1.059c0-.4.155-.777.438-1.06L15.22.22a.743.743 0 01.53-.22c.2 0 .389.078.53.22.142.141.22.33.22.53s-.078.389-.22.53L5.56 12l10.72 10.72a.744.744 0 010 1.06.749.749 0 01-.53.22z"
                ></path>
              </svg>
            </div>
            <div className="_1-mH6T8Z_2EJE_lKMSRpHu">
              <a href="/" className="ZMNsliqoeWQrs9KdGYL_R"
                ><div className="_1RWGZNXDOmEv2Oo2T7A0sb">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="16 16 200 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    className="_1TW8Y4v18-fNxsYWN5h7by"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M206.27 53.324c2.973 0 5.757-1.54 7.108-3.972v3.594h1.649v-26.27h-1.649V39.81c-1.378-2.487-4.135-3.946-7.108-3.946-4.783 0-8.648 3.676-8.648 8.703 0 5.027 3.892 8.756 8.648 8.756zm7.108-8.567c-.081 4.08-3.27 6.919-7.108 6.919-3.865 0-7-3.081-7-7.108 0-4.054 3.135-7.054 7-7.054 3.892 0 7.108 2.973 7.108 7.243zm-56.216 8.216v-26.27h1.622v26.27h-1.622zm-3.486-3c-2.189 2.081-5.081 3.324-8.352 3.324-6.892 0-12.081-5.675-12.081-12.648 0-7.027 5.189-12.703 12.081-12.703 3.271 0 6.163 1.297 8.352 3.324l-1.108 1.136c-1.892-1.757-4.406-2.865-7.244-2.865-6 0-10.459 4.946-10.459 11.08 0 6.109 4.486 11.055 10.459 11.055 2.838 0 5.352-1.081 7.244-2.865l1.108 1.162zm16.648-14.108c-4.81 0-8.756 3.378-8.756 8.676 0 5.324 3.946 8.783 8.756 8.783 4.784 0 8.757-3.432 8.757-8.783 0-5.298-4-8.676-8.757-8.676zm-.027 1.622c3.919 0 7.135 2.702 7.135 7.054 0 4.324-3.216 7.162-7.135 7.162-3.919 0-7.135-2.811-7.135-7.162 0-4.325 3.216-7.054 7.135-7.054zm24.892 15.486h-1.648v-3.297c-.973 2.648-3.649 3.648-5.919 3.648-3.973 0-6.703-2.756-6.703-7.27v-9.81h1.649v9.81c0 3.514 2.081 5.676 5.054 5.676 2.946 0 5.838-1.649 5.919-6.108v-9.406h1.648v16.757z"
                      fill="#B7C0D1"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M130.595 27.162h-3.676v25.784h3.676V27.162zm-66.406 1.136v24.648h9.595c7 0 11.08-5.297 11.08-12.27 0-7.027-4.08-12.379-11.08-12.379h-9.595zm9.568 21.162h-5.784V31.865h5.784c4.838 0 7.297 3.946 7.297 8.838 0 4.892-2.46 8.757-7.297 8.757zm16.648-3.54h13.271c.027-.38.027-.974.027-1.352 0-5.297-3.622-8.649-8.379-8.649-4.756 0-8.594 3.352-8.594 8.649 0 5.297 3.838 8.757 8.594 8.757 3.163 0 6.271-1.352 7.73-4.298-.355-.157-.727-.319-1.102-.48a68.07 68.07 0 01-1.898-.844c-.865 1.54-2.676 2.405-4.54 2.405-2.676 0-4.757-1.621-5.109-4.189zm4.946-6.812c2.514 0 4.406 1.487 4.757 4.108h-9.703c.379-2.567 2.379-4.108 4.946-4.108zm24.027 11.46c-1.108 1.81-3.54 2.757-5.621 2.757-4.514 0-8.487-3.406-8.487-8.73 0-5.325 3.973-8.703 8.487-8.703 2 0 4.459.81 5.621 2.73V36.27h3.649v16.703h-3.649v-2.405zm-5.189-.838c2.73 0 5.162-1.892 5.162-5.19 0-3.297-2.648-5.08-5.162-5.08-2.784 0-5.108 2-5.108 5.08 0 3.082 2.324 5.19 5.108 5.19z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M34.027 16H16v34.892l10.676-16.135 11.81 7.81L50.785 24c-3.676-4.946-9.379-8-16.757-8z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M51.838 25.513L38.973 44.92l-11.81-7.811L16 53.973V64h18.027c13.649 0 21.595-10.324 21.595-23.892 0-5.567-1.325-10.595-3.784-14.595z"
                      fill="#88ADDB"
                    ></path>
                  </svg>
                </div>
                <span
                  className="_1ibYTDWWxNwD-wmUnhIPaB"
                  title="PE Demo PM [02/02/2022]"
                  >PE Demo PM [02/02/2022]</span
                ></a
              >
              <div
                style={{padding: "0px 0.5em", width: "100%", transition: "width 0.3s ease 0s"}}
              >
                <div id="js-add-entry-button">
                  <div>
                    <button
                      className="b9hCATB1tuwEFW3OgbILR"
                      tabindex="1"
                      type="button"
                      style={{width:"100%"}}
                      translate="no"
                      data-qa-id="_link"
                      
                    >
                      <span>Add</span
                      ><span className="_2lwPz_eLjPK_RLcGIgKm5D"></span
                      ><svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        focusable="false"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 24a.75.75 0 01-.75-.75v-10.5H.75a.75.75 0 010-1.5h10.5V.75a.75.75 0 011.5 0v10.5h10.5a.75.75 0 010 1.5h-10.5v10.5A.75.75 0 0112 24z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="u-position-relative">
                <div className="_3Tipqicw0cRaHbaIYdIixH">
                  <div className="_3vz-Rb-yo-QJ7RGuFPfJNM">
                    <div
                      data-id="1"
                      className="RUu3XLUIu_b4i70Qr3vzy c-nav-menu__horizontal-tab"
                    >
                      <div className="_1A6FJtDFc7COGD4cq_SHLm">
                        <span className="JkIrFYMiEIlpxqjDs0KPt">All</span
                        ><span className="_3TzFgxb3Lm6_RAihiH37dF"></span>
                      </div>
                    </div>
                    <div
                      data-id="2"
                      className="RUu3XLUIu_b4i70Qr3vzy c-nav-menu__horizontal-tab"
                    >
                      <div className="_1A6FJtDFc7COGD4cq_SHLm">
                        <span className="JkIrFYMiEIlpxqjDs0KPt">Recent</span>
                      </div>
                    </div>
                    <div
                      data-id="3"
                      className="RUu3XLUIu_b4i70Qr3vzy c-nav-menu__horizontal-tab"
                    >
                      <div className="_1A6FJtDFc7COGD4cq_SHLm">
                        <span className="JkIrFYMiEIlpxqjDs0KPt">Favorites</span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div
                className="_3NJxgkCusZrxHTi8g88VkV"
                
              >
                <div className="">
                  <div className="react-sanfona">
                    <div className="react-sanfona-item">
                      <div className="_3IKuotsDlpH-583LjcH3nr">
                        <div className="_2lrtPStxYh1YKZNi4haTNu"></div>
                      </div>
                      <div
                        className="_2665Qsz7I31DBocB9bV3uy js-nav-area _1NzAmWZcpK5-IPyGDE6Q8a _2Xe7C4dQU3pFhyuuntP9iT _2UTX_B7CSn0fZ5F_dVcxQv"
                        id="react-sanfona-item-title-9d553b62-7d4c-4d88-bc1d-3b4dab48b3bd"
                        data-qa-id="area_1"
                        title="Dashboards"
                        stacklevel="0"
                        stacktype="0"
                        data-is-open="false"
                        aria-controls="react-sanfona-item-body-9d553b62-7d4c-4d88-bc1d-3b4dab48b3bd"
                      >
                        <div className="_3AnfWeg1U5f7qmlrW5zylI">
                          <div className="_1OoegQ9nDseU5emo1uKHMW">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                            >
                              <g
                                clip-path="url(#dashboards_svg__clip0_1181_185472)"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8 1.143a6.857 6.857 0 00-6.467 9.143h6.143l3.263-5.437a.571.571 0 11.98.588l-2.91 4.849h5.458A6.857 6.857 0 008 1.143zm5.94 10.286H2.06A6.854 6.854 0 008 14.857a6.855 6.855 0 005.94-3.428zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                                  fill="currentColor"
                                ></path>
                              </g>
                              <defs>
                                <clipPath
                                  id="dashboards_svg__clip0_1181_185472"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 0h16v16H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span>Dashboards</span>
                        </div>
                        <div className="_1-pga_hZW-qVmdJs6qPhEu">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="-7 -7 38 36"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            focusable="false"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.499 24a.752.752 0 01-.53-1.281L18.689 12 7.969 1.28a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53a.743.743 0 01.53-.22c.2 0 .389.078.53.22l10.72 10.72a1.5 1.5 0 01.001 2.119L9.029 23.78a.743.743 0 01-.53.22z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        aria-labelledby="react-sanfona-item-title-9d553b62-7d4c-4d88-bc1d-3b4dab48b3bd"
                        className="react-sanfona-item-body"
                        id="react-sanfona-item-body-9d553b62-7d4c-4d88-bc1d-3b4dab48b3bd"
                        
                      >
                        <div className="react-sanfona-item-body-wrapper"></div>
                      </div>
                    </div>
                  </div>
                  <div className="react-sanfona">
                    <div className="react-sanfona-item">
                      <div className="_3IKuotsDlpH-583LjcH3nr">
                        <div className="_2lrtPStxYh1YKZNi4haTNu"></div>
                      </div>
                      <div
                        className="_2665Qsz7I31DBocB9bV3uy js-nav-area _2Xe7C4dQU3pFhyuuntP9iT _2UTX_B7CSn0fZ5F_dVcxQv"
                        id="react-sanfona-item-title-08bb3da4-a17e-4045-aad5-c754f38357c5"
                        data-qa-id="area_2"
                        title="Reporting Tools"
                        stacklevel="0"
                        stacktype="0"
                        data-is-open="false"
                        aria-controls="react-sanfona-item-body-08bb3da4-a17e-4045-aad5-c754f38357c5"
                      >
                        <div className="_3AnfWeg1U5f7qmlrW5zylI">
                          <div className="_1OoegQ9nDseU5emo1uKHMW">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                            >
                              <g
                                clip-path="url(#text-formatting-list_svg__clip0_1181_185466)"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0 2.857a1.143 1.143 0 112.286 0 1.143 1.143 0 01-2.286 0zm4.571 0c0-.315.256-.571.572-.571h10.286a.571.571 0 010 1.143H5.143a.571.571 0 01-.572-.572zM0 8a1.143 1.143 0 112.286 0A1.143 1.143 0 010 8zm4.571 0c0-.316.256-.571.572-.571h10.286a.571.571 0 010 1.142H5.143A.571.571 0 014.57 8zM0 13.143a1.143 1.143 0 112.286 0 1.143 1.143 0 01-2.286 0zm4.571 0c0-.316.256-.572.572-.572h10.286a.571.571 0 110 1.143H5.143a.571.571 0 01-.572-.571z"
                                  fill="currentColor"
                                ></path>
                              </g>
                              <defs>
                                <clipPath
                                  id="text-formatting-list_svg__clip0_1181_185466"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M0 0h16v16H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span>Reporting Tools</span>
                        </div>
                        <div className="_1-pga_hZW-qVmdJs6qPhEu">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="-7 -7 38 36"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            focusable="false"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.499 24a.752.752 0 01-.53-1.281L18.689 12 7.969 1.28a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53a.743.743 0 01.53-.22c.2 0 .389.078.53.22l10.72 10.72a1.5 1.5 0 01.001 2.119L9.029 23.78a.743.743 0 01-.53.22z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="react-sanfona">
                    <div className="react-sanfona-item">
                      <div className="_3IKuotsDlpH-583LjcH3nr">
                        <div className="_2lrtPStxYh1YKZNi4haTNu"></div>
                      </div>
                      <div
                        className="_2665Qsz7I31DBocB9bV3uy js-nav-area _2Xe7C4dQU3pFhyuuntP9iT _2UTX_B7CSn0fZ5F_dVcxQv"
                        id="react-sanfona-item-title-4c8cbd7b-f098-42b8-a36f-9fc784a028b9"
                        data-qa-id="area_3"
                        title="Tools"
                        stacklevel="0"
                        stacktype="0"
                        data-is-open="false"
                        aria-controls="react-sanfona-item-body-4c8cbd7b-f098-42b8-a36f-9fc784a028b9"
                      >
                        <div className="_3AnfWeg1U5f7qmlrW5zylI">
                          <div className="_1OoegQ9nDseU5emo1uKHMW">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                            >
                              <g
                                clip-path="url(#wrench_svg__clip0_1181_185467)"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M9.3.313a4.914 4.914 0 012.75-.209 1.44 1.44 0 01.91.815.571.571 0 01-.122.628L10.555 3.83a.571.571 0 00-.01.787l.853.763.03.03a.571.571 0 00.823 0l.008-.008 2.285-2.286a.571.571 0 01.703-.083 1.44 1.44 0 01.663.964 4.926 4.926 0 01-6.579 5.537l-5.965 5.954a1.715 1.715 0 01-2.446 0l-.408-.408a1.715 1.715 0 01.001-2.447l.002-.002L6.47 6.73A4.914 4.914 0 019.3.313zm2.29.867A3.772 3.772 0 007.664 6.6a.571.571 0 01-.109.662l-6.24 6.183-.002.003a.57.57 0 000 .817l.004.004.412.412.004.004a.571.571 0 00.817 0l.005-.005 6.24-6.228a.571.571 0 01.65-.112 3.783 3.783 0 005.38-3.89L13.07 6.206a1.714 1.714 0 01-2.448.013l-.854-.765a1.714 1.714 0 01-.027-2.426l.003-.004L11.59 1.18z"
                                  fill="currentColor"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="wrench_svg__clip0_1181_185467">
                                  <path
                                    fill="currentColor"
                                    d="M0 0h16v16H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span>Tools</span>
                        </div>
                        <div className="_1-pga_hZW-qVmdJs6qPhEu">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="-7 -7 38 36"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            focusable="false"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.499 24a.752.752 0 01-.53-1.281L18.689 12 7.969 1.28a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53a.743.743 0 01.53-.22c.2 0 .389.078.53.22l10.72 10.72a1.5 1.5 0 01.001 2.119L9.029 23.78a.743.743 0 01-.53.22z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="react-sanfona">
                    <div className="react-sanfona-item">
                      <div className="_3IKuotsDlpH-583LjcH3nr">
                        <div className="_2lrtPStxYh1YKZNi4haTNu"></div>
                      </div>
                      <div
                        className="_2665Qsz7I31DBocB9bV3uy js-nav-area _2Xe7C4dQU3pFhyuuntP9iT _2UTX_B7CSn0fZ5F_dVcxQv"
                        id="react-sanfona-item-title-3a2eec5f-c5d7-49d7-afd9-69fddcaa75e8"
                        data-qa-id="area_5"
                        title="Dispatch"
                        stacklevel="0"
                        stacktype="0"
                        data-is-open="false"
                        aria-controls="react-sanfona-item-body-3a2eec5f-c5d7-49d7-afd9-69fddcaa75e8"
                      >
                        <div className="_3AnfWeg1U5f7qmlrW5zylI">
                          <div className="_1OoegQ9nDseU5emo1uKHMW">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                            >
                              <g
                                clip-path="url(#send-mail_svg__clip0_1181_185473)"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M13.525.1A1.851 1.851 0 0115.9 2.476l-4.088 12.253a1.852 1.852 0 01-1.335 1.222 1.829 1.829 0 01-1.739-.496L6.544 13.27 4.24 14.462a.571.571 0 01-.834-.523l.096-3.72L.545 7.261a1.829 1.829 0 01-.5-1.655A1.851 1.851 0 011.267 4.19l.004-.002L13.525.101zm-8.88 10.162l-.072 2.74 1.816-.938a.572.572 0 01.666.102l2.491 2.48.006.006a.685.685 0 00.654.187l.008-.001a.708.708 0 00.512-.468v-.002l4.092-12.263a.708.708 0 00.044-.36L4.645 10.262zm9.013-9.001L1.636 5.272h-.002a.709.709 0 00-.466.544l-.002.014a.686.686 0 00.186.623l2.763 2.762 9.543-7.954z"
                                  fill="currentColor"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="send-mail_svg__clip0_1181_185473">
                                  <path
                                    fill="currentColor"
                                    d="M0 0h16v16H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span>Dispatch</span>
                        </div>
                        <div className="_1-pga_hZW-qVmdJs6qPhEu">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="-7 -7 38 36"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            focusable="false"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.499 24a.752.752 0 01-.53-1.281L18.689 12 7.969 1.28a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53a.743.743 0 01.53-.22c.2 0 .389.078.53.22l10.72 10.72a1.5 1.5 0 01.001 2.119L9.029 23.78a.743.743 0 01-.53.22z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="react-sanfona">
                    <div className="react-sanfona-item">
                      <div className="_3IKuotsDlpH-583LjcH3nr">
                        <div className="_2lrtPStxYh1YKZNi4haTNu"></div>
                      </div>
                      <Menu type="general" />
                      <br/>
                      <div className="container-host">
                      </div>
                    </div>
                  </div>
                  <div className="_3IKuotsDlpH-583LjcH3nr">
                    <div
                      className="_2lrtPStxYh1YKZNi4haTNu _2-sOHg-kK_Wp9WJopRnIWo"
                    ></div>
                  </div>
                  <div
                    className="_2665Qsz7I31DBocB9bV3uy _3yOuiaZuar8lasuVSWr08z _2Xe7C4dQU3pFhyuuntP9iT _2UTX_B7CSn0fZ5F_dVcxQv"
                    id="8"
                    data-qa-id="area_8"
                    title=""
                    stacklevel="0"
                    stacktype="0"
                    data-is-open="false"
                  >
                    <div className="_3AnfWeg1U5f7qmlrW5zylI">
                      <div className="_1OoegQ9nDseU5emo1uKHMW">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                        >
                          <g clip-path="url(#rewind_svg__clip0_1181_185471)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.412.71a.571.571 0 00-1.11-.277l-.568 2.276a.574.574 0 00.421.705l2.278.569a.571.571 0 00.277-1.109l-1.191-.298a7.692 7.692 0 014.48-1.433H8A6.857 6.857 0 111.143 8 .571.571 0 000 8a8 8 0 108-8v.571V0a8.834 8.834 0 00-4.757 1.384M8.57 4A.571.571 0 007.43 4v4.218L4.773 9.546a.571.571 0 10.511 1.022l2.972-1.485a.571.571 0 00.315-.512V4z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="rewind_svg__clip0_1181_185471">
                              <path
                                fill="currentColor"
                                d="M0 0h16v16H0z"
                              ></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span></span>
                    </div>
                  </div>
                  <div className="_3IKuotsDlpH-583LjcH3nr">
                    <div
                      className="_2lrtPStxYh1YKZNi4haTNu _2-sOHg-kK_Wp9WJopRnIWo"
                    ></div>
                  </div>
                  <div
                    className="_2665Qsz7I31DBocB9bV3uy _3yOuiaZuar8lasuVSWr08z _2Xe7C4dQU3pFhyuuntP9iT _2UTX_B7CSn0fZ5F_dVcxQv"
                    id="9"
                    data-qa-id="area_9"
                    title=""
                    stacklevel="0"
                    stacktype="0"
                    data-is-open="false"
                  >
                    <div className="_3AnfWeg1U5f7qmlrW5zylI">
                      <div className="_1OoegQ9nDseU5emo1uKHMW">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          focusable="false"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.975 1.468a.05.05 0 00-.017.016L6.12 5.192a1.15 1.15 0 01-.862.627l-4.077.604a.05.05 0 00-.021.012.05.05 0 00-.015.02.05.05 0 000 .023.05.05 0 00.011.022m0 0l2.946 2.843a1.15 1.15 0 01.336 1.022l-.705 4.124-.563-.097.563.097c0 .001-.001.01.004.023a.05.05 0 00.014.02.05.05 0 00.023.007.049.049 0 00.024-.003l.267.505-.267-.505L7.46 12.6a1.151 1.151 0 011.076 0l3.66 1.934-.266.505.267-.505a.05.05 0 00.024.003.048.048 0 00.023-.007.05.05 0 00.014-.02.049.049 0 00.004-.024l.563-.097-.563.097-.704-4.074A1.15 1.15 0 0111.88 9.4l.403.406-.403-.406 2.928-2.905a.049.049 0 00.01-.021.049.049 0 00.001-.025.05.05 0 00-.015-.019.05.05 0 00-.02-.011l-4.048-.6a1.151 1.151 0 01-.862-.627L8.038 1.484l.496-.245-.496.245a.05.05 0 00-.017-.016.05.05 0 00-.023-.009.05.05 0 00-.023.009M6.934.978C7.132.576 7.55.315 7.998.315c.447 0 .866.26 1.064.661l-.512.254.512-.254L10.9 4.685l.002.003.004.001-.084.565.084-.565 4.047.6c.44.065.815.381.954.804.139.423.024.9-.292 1.214l-2.928 2.904-.002.004v.004l.704 4.074c.076.442-.11.9-.473 1.163a1.198 1.198 0 01-1.252.09l-3.661-1.934a.008.008 0 00-.008 0l-3.66 1.934c-.397.21-.89.175-1.253-.088a1.198 1.198 0 01-.474-1.162l.705-4.124.563.096-.563-.096v-.004a.008.008 0 00-.002-.003L.364 7.323a1.198 1.198 0 01-.307-1.218c.137-.426.514-.746.957-.812l.084.565-.084-.565 4.077-.604m5.814 0zM6.934.977z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                
              ></div>
            </div>
          </div>
        </nav>
        <div className="_1Yi30Jub9UKsHtau5vIiRI">
          <div className="_26w63FpWri3VDqbTu05K9y">
            <header className="rR_pAErlTIpDGyvgNnat8">
              <div style={{width: "100%"}}>
                <header className="_3tIORHRYDnByDHol1Dguao">
                  <div
                    style={{overflow: "visible", "opacity": 1, "max-height": "none", "max-width": "none"}}
                  >
                    <div className="PXkdPSfeOccHECFPQmwUQ">
                      <div
                        className="_2JfHv_HOQ3tR_tJwcMDIhw"
                        style={{width: "30%"}}
                      ></div>
                      <div className="_2JfHv_HOQ3tR_tJwcMDIhw" style={{width: "40%"}}>
                        <div >
                          <div>
                            <div
                              className="c-dropdown-filter js-dropdown-filter c-dropdown-filter--grouped"
                            >
                              <div className="c-dropdown-filter__wrapper">
                                <div
                                  className="u-min-width-100p u-background-white"
                                ></div>
                                <div
                                  className="u-display-flex u-position-relative u-z-index-200 u-overflow-hidden c-dropdown-filter__wrapper-container"
                                >
                                  <div
                                    className="c-dropdown-filter__wrapper__inner"
                                  >
                                    <ul
                                      className="c-dropdown-filter__list"
                                      data-qa-id="quick-search_list"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="_2JfHv_HOQ3tR_tJwcMDIhw" style={{width: "30%"}}>
                        <nav className="_2aLb80HV_ovLOh-uQEda9s">
                          <div className="_3Z5Wf0KgOFBjzyx5YZ0fEf">
                            <div
                              
                            >
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                focusable="false"
                                data-qa-id="notification_icon"
                                
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.991 19.501a.754.754 0 01-.674-.421.747.747 0 01.083-.791c.02-.03 1.341-1.971 1.341-7.788a8.237 8.237 0 017.5-8.216V.751a.75.75 0 011.5 0v1.534a8.237 8.237 0 017.5 8.216c0 6.303 1.246 7.686 1.258 7.699a.756.756 0 01.187.818.745.745 0 01-.695.483h-18zm16.71-1.5c-.482-1.232-.961-3.47-.961-7.5a6.758 6.758 0 00-6.75-6.75 6.758 6.758 0 00-6.75 6.75c0 3.957-.58 6.277-1.046 7.5h15.507zm-9.067 5.652a2.835 2.835 0 004.081-1.691.75.75 0 00-.719-.961.755.755 0 00-.72.539 1.334 1.334 0 01-1.923.797 1.335 1.335 0 01-.642-.798.755.755 0 00-.931-.508.75.75 0 00-.508.931 2.817 2.817 0 001.362 1.691z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="_3Z5Wf0KgOFBjzyx5YZ0fEf">
                            <div
                              
                            >
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                focusable="false"
                                data-qa-id="help-menu_icon"
                                
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0a12 12 0 0112 12c0 6.627-5.373 12-12 12zm1.25-11.46A3.77 3.77 0 0015.75 9a3.75 3.75 0 10-7.5 0 .75.75 0 001.5 0 2.25 2.25 0 113 2.12 2.25 2.25 0 00-1.5 2.12v1a.75.75 0 001.5 0v-1c0-.316.2-.598.5-.7zm-2.302 4.653A1.13 1.13 0 0112 16.5c.619 0 1.12.501 1.12 1.12a1.13 1.13 0 11-2.172-.427zM12 1.5c5.799 0 10.5 4.701 10.5 10.5-.006 5.797-4.703 10.494-10.5 10.5-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="_3Z5Wf0KgOFBjzyx5YZ0fEf">
                            <div>
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                focusable="false"
                                data-qa-id="design-mode_icon"
                                
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.15 23.988c-.675 0-1.322-.25-1.821-.704a2.702 2.702 0 01-.883-2.128l.072-1.404a1.21 1.21 0 00-1.144-1.269l-.062-.002c-.021 0-.041 0-.062.002l-1.401.071a2.698 2.698 0 01-1.953-.692 2.692 2.692 0 01-.892-1.871c-.043-.817.28-1.6.887-2.149l1.042-.94a1.207 1.207 0 000-1.796L.89 10.16a2.687 2.687 0 01-.885-1.874A2.708 2.708 0 012.84 5.449l1.402.071c.02.002.063.002.063.002a1.209 1.209 0 001.208-1.271l-.067-1.406A2.712 2.712 0 018.154.008c.76 0 1.489.323 2 .886l.942 1.039a1.2 1.2 0 00.9.401 1.187 1.187 0 00.893-.398l.95-1.042a2.689 2.689 0 012.007-.89 2.707 2.707 0 012.707 2.847l-.071 1.4a1.21 1.21 0 001.146 1.267h.003l.058.002.057-.001 1.4-.071.138-.003c.672 0 1.316.249 1.815.702.536.486.85 1.152.887 1.874a2.7 2.7 0 01-.89 2.143l-1.041.94a1.2 1.2 0 00-.396.836 1.2 1.2 0 00.396.958l1.042.941c.537.485.853 1.15.89 1.873a2.687 2.687 0 01-.695 1.953 2.72 2.72 0 01-2.146.889l-1.402-.071-.066-.002c-.302 0-.58.108-.806.311a1.194 1.194 0 00-.397.96l.07 1.4a2.698 2.698 0 01-.707 1.953 2.69 2.69 0 01-2.011.882c-.75 0-1.474-.321-1.986-.88l-.944-1.044a1.213 1.213 0 00-1.795 0l-.946 1.042a2.72 2.72 0 01-2.005.883zM6.746 12a5.256 5.256 0 005.25 5.25 5.256 5.256 0 005.25-5.25 5.256 5.256 0 00-5.25-5.25A5.256 5.256 0 006.745 12zm1.5 0a3.754 3.754 0 013.75-3.75 3.754 3.754 0 013.75 3.75 3.754 3.754 0 01-3.75 3.75A3.754 3.754 0 018.245 12zM4.45 16.986a2.12 2.12 0 00-.138-.004l-.137.002h-.003l-1.401.071c-.021.002-.043.002-.064.002a1.204 1.204 0 01-1.205-1.145 1.203 1.203 0 01.395-.958l1.04-.94a2.713 2.713 0 00.003-4.021l-1.041-.945a1.202 1.202 0 01-.395-.836 1.21 1.21 0 011.262-1.264l1.399.07A2.708 2.708 0 007.01 4.174l-.067-1.4a1.21 1.21 0 011.15-1.265l.057-.001c.34 0 .666.144.894.394l.939 1.038a2.691 2.691 0 002.009.894 2.703 2.703 0 002.01-.892l.948-1.04c.216-.24.513-.381.837-.397l.068-.002c.299 0 .576.107.802.312a1.2 1.2 0 01.397.958l-.071 1.401a2.71 2.71 0 002.838 2.841l1.399-.071.062-.002c.299 0 .586.111.809.313.24.217.38.514.396.837.018.364-.126.712-.396.956l-1.042.94a2.713 2.713 0 000 4.022l1.042.94c.24.217.38.513.397.836.016.322-.094.632-.311.872a1.2 1.2 0 01-.955.397h-.003l-1.4-.071a2.697 2.697 0 00-1.954.694 2.688 2.688 0 00-.89 2.149l.072 1.395a1.21 1.21 0 01-1.152 1.262l-.05.001c-.343 0-.67-.142-.895-.389l-.941-1.041a2.717 2.717 0 00-2.012-.892 2.705 2.705 0 00-2.008.892l-.944 1.04a1.2 1.2 0 01-.837.394l-.06.001a1.205 1.205 0 01-1.206-1.26l.073-1.4a2.712 2.712 0 00-2.566-2.844z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="_3Z5Wf0KgOFBjzyx5YZ0fEf">
                            <div
                              
                            >
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                focusable="false"
                                data-qa-id="user-menu_icon"
                                
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm9.75 12a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75zM7.5 6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5A4.505 4.505 0 017.5 6z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div
                    className="x6QYLwoBQj61a1vY-20jx u-overflow-x-auto"
                    style={{"min-height": "2.75rem"}}
                  >
                    <div className="u-min-width-15" >
                      <div
                        className="U1seeDr4KwMCk1B3YLkOD"
                        
                      >
                        <div className="_3G6WLeQ-TyaG6qngD31b15">
                          <h2
                            className="FcQaeC5uWhx5_KXhlEbdA _3HRvWRyfoU-4Q40NCdOv_M u-text-truncate"
                            title="MFE host example"
                          >
                            MFE host example
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      id="header__page-tabs-container"
                      className="u-flex-grow-1 u-flex-shrink u-overflow-hidden"
                    ></div>
                    <div
                      
                    >
                      <div className="_3ZxKrymy-1ptwuQTWYq0fA"></div>
                    </div>
                  </div>
                </header>
              </div>
            </header>
            <div className="_2SrqwGgbHcvwSXCNdjhU7M _3TbhSUMuyGjCyQXS7WWogV">
              <div className="_2vKoLGfFsFWQTx8naPkf4T">
                <div className="Itbyhey3Wf0PUisFTa9gr u-flex-direction-column">
                  <div
                    className="u-display-flex u-flex-grow u-flex-direction-column u-width-full u-height-full"
                  >
                    {children}
                  </div>
                </div>
              </div>
              <div className="_3wCs71at3v7qYqh5EZv3_x">
                <section
                  id="pinned-popups-container"
                  className="c-pinned-popup-panel"
                ></section>
                <section id="quick-view-panel-container">
                  <div className="c-quick-view-panel c-quick-view-panel--collapsed">
                    <div
                      className="c-quick-view-panel__header"
                      data-qa-id="quick-view-header"
                    ></div>
                  </div>
                </section>
              </div>
            </div>
            <footer className="_2y2nv1rJekfTk_OMWnS5wW"></footer>
          </div>
        </div>
      </div>
      <div id="js-presentation-holder"></div>
    </div>
);

export default App;
