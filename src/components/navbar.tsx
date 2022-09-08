function NavBar(){
    return(
        <nav className="container mx-auto">
            <div className="relative flex justify-between items-center py-4">
                <button className="absolute left-1/2 mx-auto">
                    <svg className="h-5" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 15.125C9.90598 15.125 8.85677 14.6904 8.08318 13.9168C7.3096 13.1432 6.875 12.094 6.875 11C6.875 9.90598 7.3096 8.85677 8.08318 8.08318C8.85677 7.3096 9.90598 6.875 11 6.875C12.094 6.875 13.1432 7.3096 13.9168 8.08318C14.6904 8.85677 15.125 9.90598 15.125 11C15.125 12.094 14.6904 13.1432 13.9168 13.9168C13.1432 14.6904 12.094 15.125 11 15.125ZM11 16.5C12.4587 16.5 13.8576 15.9205 14.8891 14.8891C15.9205 13.8576 16.5 12.4587 16.5 11C16.5 9.54131 15.9205 8.14236 14.8891 7.11091C13.8576 6.07946 12.4587 5.5 11 5.5C9.54131 5.5 8.14236 6.07946 7.11091 7.11091C6.07946 8.14236 5.5 9.54131 5.5 11C5.5 12.4587 6.07946 13.8576 7.11091 14.8891C8.14236 15.9205 9.54131 16.5 11 16.5ZM11 0C11.1823 0 11.3572 0.0724328 11.4861 0.201364C11.6151 0.330295 11.6875 0.505164 11.6875 0.6875V3.4375C11.6875 3.61984 11.6151 3.7947 11.4861 3.92364C11.3572 4.05257 11.1823 4.125 11 4.125C10.8177 4.125 10.6428 4.05257 10.5139 3.92364C10.3849 3.7947 10.3125 3.61984 10.3125 3.4375V0.6875C10.3125 0.505164 10.3849 0.330295 10.5139 0.201364C10.6428 0.0724328 10.8177 0 11 0V0ZM11 17.875C11.1823 17.875 11.3572 17.9474 11.4861 18.0764C11.6151 18.2053 11.6875 18.3802 11.6875 18.5625V21.3125C11.6875 21.4948 11.6151 21.6697 11.4861 21.7986C11.3572 21.9276 11.1823 22 11 22C10.8177 22 10.6428 21.9276 10.5139 21.7986C10.3849 21.6697 10.3125 21.4948 10.3125 21.3125V18.5625C10.3125 18.3802 10.3849 18.2053 10.5139 18.0764C10.6428 17.9474 10.8177 17.875 11 17.875ZM22 11C22 11.1823 21.9276 11.3572 21.7986 11.4861C21.6697 11.6151 21.4948 11.6875 21.3125 11.6875H18.5625C18.3802 11.6875 18.2053 11.6151 18.0764 11.4861C17.9474 11.3572 17.875 11.1823 17.875 11C17.875 10.8177 17.9474 10.6428 18.0764 10.5139C18.2053 10.3849 18.3802 10.3125 18.5625 10.3125H21.3125C21.4948 10.3125 21.6697 10.3849 21.7986 10.5139C21.9276 10.6428 22 10.8177 22 11ZM4.125 11C4.125 11.1823 4.05257 11.3572 3.92364 11.4861C3.7947 11.6151 3.61984 11.6875 3.4375 11.6875H0.6875C0.505164 11.6875 0.330295 11.6151 0.201364 11.4861C0.0724328 11.3572 0 11.1823 0 11C0 10.8177 0.0724328 10.6428 0.201364 10.5139C0.330295 10.3849 0.505164 10.3125 0.6875 10.3125H3.4375C3.61984 10.3125 3.7947 10.3849 3.92364 10.5139C4.05257 10.6428 4.125 10.8177 4.125 11ZM18.7784 3.22162C18.9073 3.35055 18.9797 3.52539 18.9797 3.70769C18.9797 3.88999 18.9073 4.06482 18.7784 4.19375L16.8341 6.13938C16.7702 6.20321 16.6943 6.25382 16.6109 6.28833C16.5274 6.32284 16.4379 6.34057 16.3476 6.34051C16.1651 6.34038 15.9902 6.26778 15.8613 6.13869C15.7975 6.07477 15.7469 5.9989 15.7124 5.91542C15.6778 5.83193 15.6601 5.74247 15.6602 5.65214C15.6603 5.4697 15.7329 5.29479 15.862 5.16587L17.8062 3.22162C17.9352 3.09274 18.11 3.02033 18.2923 3.02033C18.4746 3.02033 18.6494 3.09274 18.7784 3.22162ZM6.138 15.862C6.26689 15.9909 6.33929 16.1658 6.33929 16.3481C6.33929 16.5304 6.26689 16.7052 6.138 16.8341L4.19375 18.7784C4.06409 18.9036 3.89042 18.9729 3.71016 18.9713C3.5299 18.9698 3.35747 18.8975 3.23 18.77C3.10253 18.6425 3.03023 18.4701 3.02866 18.2898C3.0271 18.1096 3.09639 17.9359 3.22162 17.8062L5.16587 15.862C5.2948 15.7331 5.46964 15.6607 5.65194 15.6607C5.83424 15.6607 6.00908 15.7331 6.138 15.862ZM18.7784 18.7784C18.6494 18.9073 18.4746 18.9797 18.2923 18.9797C18.11 18.9797 17.9352 18.9073 17.8062 18.7784L15.862 16.8341C15.7368 16.7045 15.6675 16.5308 15.669 16.3505C15.6706 16.1703 15.7429 15.9978 15.8704 15.8704C15.9978 15.7429 16.1703 15.6706 16.3505 15.669C16.5308 15.6675 16.7045 15.7368 16.8341 15.862L18.7784 17.8062C18.9073 17.9352 18.9797 18.11 18.9797 18.2923C18.9797 18.4746 18.9073 18.6494 18.7784 18.7784ZM6.138 6.13938C6.00908 6.26826 5.83424 6.34067 5.65194 6.34067C5.46964 6.34067 5.2948 6.26826 5.16587 6.13938L3.22162 4.19375C3.15596 4.13033 3.10359 4.05447 3.06756 3.97059C3.03152 3.88671 3.01256 3.7965 3.01177 3.70521C3.01097 3.61393 3.02837 3.5234 3.06294 3.43891C3.0975 3.35442 3.14855 3.27765 3.2131 3.2131C3.27765 3.14855 3.35442 3.0975 3.43891 3.06294C3.5234 3.02837 3.61393 3.01097 3.70521 3.01177C3.7965 3.01256 3.88671 3.03152 3.97059 3.06756C4.05447 3.10359 4.13033 3.15596 4.19375 3.22162L6.138 5.16587C6.20202 5.22974 6.25282 5.3056 6.28748 5.38913C6.32214 5.47265 6.33998 5.56219 6.33998 5.65263C6.33998 5.74306 6.32214 5.8326 6.28748 5.91612C6.25282 5.99965 6.20202 6.07551 6.138 6.13938Z" fill="#333333"/>
                    </svg>
                </button>
                <div>
                    <h2 className="font-extrabold text-lg">Ed. Lima</h2>
                </div>
                <div className="flex">
                    <div className="pr-8">
                        <ul className="flex gap-8">
                            <li className="font-bold hidden md:block">Posts</li>
                            <li className="font-bold hidden md:block">Sobre</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex gap-2">
                            <li>
                                <svg className="h-5" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.7206e-07 1.838C2.7206e-07 1.35053 0.193646 0.883032 0.538338 0.53834C0.88303 0.193648 1.35053 2.45031e-06 1.838 2.45031e-06H20.16C20.4016 -0.000392101 20.6409 0.0468654 20.8641 0.139069C21.0874 0.231273 21.2903 0.366612 21.4612 0.537339C21.6322 0.708065 21.7677 0.910826 21.8602 1.13401C21.9526 1.3572 22.0001 1.59643 22 1.838V20.16C22.0003 20.4016 21.9529 20.6409 21.8606 20.8642C21.7683 21.0875 21.6328 21.2904 21.462 21.4613C21.2912 21.6322 21.0884 21.7678 20.8651 21.8602C20.6419 21.9526 20.4026 22.0001 20.161 22H1.838C1.59655 22 1.35746 21.9524 1.1344 21.86C0.911335 21.7676 0.708671 21.6321 0.537984 21.4613C0.367297 21.2905 0.231932 21.0878 0.139623 20.8647C0.0473133 20.6416 -0.000131096 20.4025 2.7206e-07 20.161V1.838ZM8.708 8.388H11.687V9.884C12.117 9.024 13.217 8.25 14.87 8.25C18.039 8.25 18.79 9.963 18.79 13.106V18.928H15.583V13.822C15.583 12.032 15.153 11.022 14.061 11.022C12.546 11.022 11.916 12.111 11.916 13.822V18.928H8.708V8.388ZM3.208 18.791H6.416V8.25H3.208V18.79V18.791ZM6.875 4.812C6.88105 5.08668 6.83217 5.35979 6.73124 5.61532C6.63031 5.87084 6.47935 6.10364 6.28723 6.30003C6.09511 6.49643 5.8657 6.65248 5.61246 6.75901C5.35921 6.86554 5.08724 6.92042 4.8125 6.92042C4.53776 6.92042 4.26579 6.86554 4.01255 6.75901C3.7593 6.65248 3.52989 6.49643 3.33777 6.30003C3.14565 6.10364 2.99469 5.87084 2.89376 5.61532C2.79283 5.35979 2.74395 5.08668 2.75 4.812C2.76187 4.27286 2.98439 3.75979 3.36989 3.38269C3.75539 3.00558 4.27322 2.79442 4.8125 2.79442C5.35178 2.79442 5.86961 3.00558 6.25512 3.38269C6.64062 3.75979 6.86313 4.27286 6.875 4.812Z" fill="#171717"/>
                                </svg>
                            </li>
                            <li>
                                <svg className="h-5" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.6429 0H2.35714C1.0558 0 0 1.0558 0 2.35714V19.6429C0 20.9442 1.0558 22 2.35714 22H19.6429C20.9442 22 22 20.9442 22 19.6429V2.35714C22 1.0558 20.9442 0 19.6429 0ZM13.6174 18.8424C13.2049 18.9161 13.0527 18.6607 13.0527 18.4496C13.0527 18.1844 13.0625 16.829 13.0625 15.7339C13.0625 14.9679 12.8071 14.4817 12.5076 14.2263C14.3246 14.025 16.2397 13.7746 16.2397 10.6366C16.2397 9.74286 15.9205 9.29598 15.4 8.72143C15.4835 8.51027 15.7634 7.64107 15.3165 6.51161C14.6339 6.30045 13.0723 7.39062 13.0723 7.39062C12.4241 7.20893 11.7219 7.11562 11.0295 7.11562C10.3371 7.11562 9.63482 7.20893 8.98661 7.39062C8.98661 7.39062 7.425 6.30045 6.74241 6.51161C6.29554 7.63616 6.57054 8.50536 6.65893 8.72143C6.13839 9.29598 5.89286 9.74286 5.89286 10.6366C5.89286 13.7598 7.72455 14.025 9.54152 14.2263C9.3058 14.4375 9.09464 14.8009 9.02098 15.3214C8.55446 15.5326 7.36116 15.896 6.64911 14.6388C6.20223 13.8629 5.39687 13.7991 5.39687 13.7991C4.60134 13.7893 5.34286 14.3 5.34286 14.3C5.87321 14.5455 6.24643 15.4884 6.24643 15.4884C6.72277 16.9469 9.00134 16.4558 9.00134 16.4558C9.00134 17.1384 9.01116 18.2482 9.01116 18.4496C9.01116 18.6607 8.86384 18.9161 8.44643 18.8424C5.20536 17.7571 2.93661 14.6732 2.93661 11.0687C2.93661 6.56071 6.38393 3.13795 10.892 3.13795C15.4 3.13795 19.0536 6.56071 19.0536 11.0687C19.0585 14.6732 16.8585 17.7621 13.6174 18.8424ZM8.8 15.842C8.7067 15.8616 8.6183 15.8223 8.60848 15.7585C8.59866 15.6848 8.6625 15.621 8.7558 15.6013C8.84911 15.5915 8.9375 15.6308 8.94732 15.6946C8.96205 15.7585 8.89821 15.8223 8.8 15.842ZM8.33348 15.7978C8.33348 15.8616 8.25982 15.9156 8.16161 15.9156C8.05357 15.9254 7.97991 15.8714 7.97991 15.7978C7.97991 15.7339 8.05357 15.6799 8.15179 15.6799C8.24509 15.6701 8.33348 15.7241 8.33348 15.7978ZM7.66071 15.7437C7.64107 15.8076 7.54286 15.8371 7.45937 15.8076C7.36607 15.7879 7.30223 15.7143 7.32188 15.6504C7.34152 15.5866 7.43973 15.5571 7.52321 15.5768C7.62143 15.6062 7.68527 15.6799 7.66071 15.7437ZM7.0567 15.4786C7.0125 15.5326 6.9192 15.5228 6.84554 15.4491C6.77187 15.3853 6.75223 15.292 6.80134 15.2478C6.84554 15.1937 6.93884 15.2036 7.0125 15.2772C7.07634 15.3411 7.10089 15.4393 7.0567 15.4786ZM6.60982 15.0317C6.56563 15.0612 6.48214 15.0317 6.42812 14.958C6.37411 14.8844 6.37411 14.8009 6.42812 14.7665C6.48214 14.7223 6.56563 14.7567 6.60982 14.8304C6.66384 14.904 6.66384 14.9924 6.60982 15.0317ZM6.29063 14.5554C6.24643 14.5996 6.17277 14.575 6.11875 14.5259C6.06473 14.4621 6.05491 14.3884 6.09911 14.354C6.1433 14.3098 6.21696 14.3344 6.27098 14.3835C6.325 14.4473 6.33482 14.521 6.29063 14.5554ZM5.96161 14.192C5.94196 14.2362 5.87812 14.246 5.82411 14.2116C5.76027 14.1821 5.7308 14.1281 5.75045 14.0839C5.77009 14.0545 5.82411 14.0397 5.88795 14.0643C5.95179 14.0987 5.98125 14.1527 5.96161 14.192Z" fill="#171717"/>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;