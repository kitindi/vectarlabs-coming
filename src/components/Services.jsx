const Services = () => {
  return (
    <div>
      <div className="w-full text-white bg-slate-950 py-32" id="services">
        <div className="container mx-auto px-8 md:px-20 lg:px-20 max-w-7xl ">
          <h2 className="text-xl font-bold mb-10">
            {" "}
            <span className="text-yellow-400">#</span> Our Services
          </h2>
          <h2 className="text-4xl font-semibold max-w-xl text-[#cfe0f4]">High-Imapct Services That Will Propel Your Company Forward</h2>
          <div className="w-full py-16 grid md:grid-cols-12">
            <div className="p-6 border border-slate-700 col-span-4 h-56">
              <p className="text-2xl">UI/UX & Product Design</p>
              <p className="my-2">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#facc15" fill="none">
                  <path
                    d="M4 8C4 5.17157 4 3.75736 5.00421 2.87868C6.00841 2 7.62465 2 10.8571 2H13.1429C16.3753 2 17.9916 2 18.9958 2.87868C20 3.75736 20 5.17157 20 8V17H4V8Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path d="M3 17H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path
                    d="M10.6987 5.56588C11.9289 5.38957 13.9674 5.4601 12.2803 7.15266C10.1715 9.26836 7.00837 14.0289 10.6987 12.4421C14.3891 10.8554 15.9709 11.9132 14.3893 13.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M12 17V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M5 22L8 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M19 22L16 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </p>
              <p>Craft intuitive and visually appealing designs that enhance user experience and engagement.</p>
            </div>
            <div className="p-6 border border-slate-700 col-span-4 h-56">
              <p className="text-2xl">Website Development</p>
              <p className="my-2">
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#facc15" fill="none">
                  <path
                    d="M10.8453 2.47782C11.4088 2.15927 11.6906 2 12 2C12.3094 2 12.5912 2.15927 13.1547 2.47782L19.8453 6.25983C20.4088 6.57838 20.6906 6.73766 20.8453 7C21 7.26234 21 7.58089 21 8.21799V15.782C21 16.4191 21 16.7377 20.8453 17C20.6906 17.2623 20.4088 17.4216 19.8453 17.7402L13.1547 21.5222C12.5912 21.8407 12.3094 22 12 22C11.6906 22 11.4088 21.8407 10.8453 21.5222L4.1547 17.7402C3.59117 17.4216 3.3094 17.2623 3.1547 17C3 16.7377 3 16.4191 3 15.782V8.21799C3 7.58089 3 7.26234 3.1547 7C3.3094 6.73766 3.59117 6.57838 4.1547 6.25983L10.8453 2.47782Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5 4.27051L13.134 5.55062C12.5803 5.85019 12.3035 5.99998 12 5.99998C11.6965 5.99998 11.4197 5.85019 10.866 5.55062L8.5 4.27051"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11.6154V22M12 11.6154L20.5 7M12 11.6154L3.5 7"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 12L5.89443 13.5585C6.43234 13.8482 6.7013 13.993 6.85065 14.2532C7 14.5135 7 14.8373 7 15.485V19"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 12L18.1056 13.5585C17.5677 13.8482 17.2987 13.993 17.1493 14.2532C17 14.5135 17 14.8373 17 15.485V19"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p>Build responsive, user-friendly websites and mobile apps that captivate your audience and drive conversions.</p>
            </div>
            <div className="p-6 border border-slate-700 col-span-4 h-56">
              <p className="text-2xl">Software Development</p>
              <p className="my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#facc15" fill="none">
                  <path
                    d="M9 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.5 12L16.4199 12.7929C16.8066 13.1262 17 13.2929 17 13.5C17 13.7071 16.8066 13.8738 16.4199 14.2071L15.5 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 12L7.58009 12.7929C7.19337 13.1262 7 13.2929 7 13.5C7 13.7071 7.19336 13.8738 7.58009 14.2071L8.5 15"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M13 11L11 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p>Create scalable, secure, and innovative software solutions tailored to your business goals.</p>
            </div>
            <div className="p-6 border border-slate-700 col-span-4 h-56">
              <p className="text-2xl">E-Commerce Solutions</p>
              <p className="my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="32" color="#facc15" fill="none">
                  <path
                    d="M12 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21 17.5V15C19 15 17.5 14 17.5 14C17.5 14 16 15 14 15V17.5C14 21 17.5 22 17.5 22C17.5 22 21 21 21 17.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5" stroke="currentColor" stroke-width="1.5" />
                </svg>
              </p>
              <p>Design and develop high-performing online stores that boost sales and customer satisfaction</p>
            </div>
            <div className="p-6 border border-slate-700 col-span-4 h-56">
              <p className="text-2xl">Maintenance & Support</p>
              <p className="my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="38" color="#facc15" fill="none">
                  <path
                    d="M12 22H10.5C6.72873 22 4.8431 22 3.67153 20.8284C2.49995 19.6568 2.49997 17.7712 2.5 13.9999L2.50004 9.99993C2.50007 6.22872 2.50008 4.34312 3.67166 3.17156C4.84323 2 6.72883 2 10.5 2H11.4999C15.2712 2 17.1568 2 18.3284 3.17157C19.4999 4.34315 19.4999 6.22876 19.4999 10V11"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7 7H15M7 12H11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M17.5 20.7727C19.2673 20.7727 20.7 19.3075 20.7 17.5C20.7 15.6925 19.2673 14.2273 17.5 14.2273M17.5 20.7727C15.7327 20.7727 14.3 19.3075 14.3 17.5C14.3 15.6925 15.7327 14.2273 17.5 14.2273M17.5 20.7727V22M17.5 14.2273V13M14.5913 15.7149L13.5004 15.0455M21.5 19.9545L20.4092 19.2851M20.4087 15.7149L21.4996 15.0455M13.5 19.9545L14.5908 19.2851"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
              <p>Ensure your digital products run smoothly with our reliable maintenance and support services.</p>
            </div>
            <div className="p-6 border border-slate-700 col-span-4 h-56">
              <p className="text-2xl">Digital Marketing</p>
              <p className="my-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="#facc15" fill="none">
                  <path
                    d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7.5 12.5V6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p>
                From increasing brand visibility to generating high-quality leads, we craft tailored digital marketing campaigns that deliver measurable results
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
