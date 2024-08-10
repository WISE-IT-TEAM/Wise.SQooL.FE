// src/components/IconSet.js
import React from 'react';
import Icon from './BaseIcon';

// DarkLogo 아이콘
export const DarkLogo = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <g clipPath="url(#clip0_1722_2359)">
      <g clipPath="url(#clip1_1722_2359)">
        <path d="M44.2147 27.2905C42.8075 27.2905 41.8255 26.1608 42.0213 24.7673V24.7673C42.2172 23.3737 43.5167 22.2441 44.9239 22.2441H51.3316C51.6734 22.2441 51.9646 22.1744 52.2053 22.035C52.4661 21.8957 52.6722 21.7165 52.8236 21.4975C52.9979 21.2587 53.1032 21.0098 53.1396 20.751C53.1788 20.4723 53.1434 20.2235 53.0334 20.0045C52.9464 19.7656 52.7921 19.5765 52.5704 19.4372C52.3689 19.2978 52.0972 19.2282 51.7555 19.2282H49.0416C47.735 19.2282 46.5839 18.9793 45.5884 18.4816C44.5929 17.984 43.8393 17.2673 43.3275 16.3317C42.8386 15.3762 42.6879 14.2315 42.8753 12.8978C43.06 11.5839 43.5224 10.4392 44.2625 9.46381C45.0027 8.48837 45.9232 7.7319 47.0239 7.19442C48.1247 6.65693 49.2983 6.38819 50.5446 6.38819H57.6157C59.0229 6.38819 60.0049 7.51786 59.8091 8.91139V8.91139C59.6133 10.3049 58.3137 11.4346 56.9065 11.4346H50.7099C50.4284 11.4346 50.1688 11.4943 49.9308 11.6138C49.713 11.7332 49.5298 11.8925 49.3812 12.0915C49.2527 12.2906 49.1717 12.5096 49.1381 12.7484C49.1046 12.9873 49.124 13.2063 49.1966 13.4054C49.2892 13.6044 49.4263 13.7737 49.6077 13.913C49.812 14.0324 50.0549 14.0922 50.3364 14.0922H53.2613C54.6886 14.0922 55.8972 14.3609 56.8871 14.8984C57.8798 15.416 58.6018 16.1426 59.0533 17.0782C59.5048 18.0138 59.641 19.1187 59.462 20.3927C59.2577 21.8459 58.7713 23.0901 58.0026 24.1253C57.2541 25.1604 56.3294 25.9467 55.2286 26.4842C54.1279 27.0217 52.9543 27.2905 51.7079 27.2905H44.2147Z" fill="#F8FAFC"/>
        <path d="M67.8285 33.3521C66.0383 33.3521 64.789 31.915 65.0381 30.1421L65.0885 29.7838C65.3376 28.011 66.9909 26.5738 68.7811 26.5738V26.5738C70.5714 26.5738 71.8207 28.011 71.5716 29.7838L71.5212 30.1421C71.272 31.915 69.6188 33.3521 67.8285 33.3521V33.3521ZM68.6108 27.6786C66.9423 27.6786 65.4422 27.4099 64.1106 26.8724C62.799 26.3349 61.6992 25.5785 60.811 24.603C59.9458 23.6077 59.3241 22.4531 58.9459 21.1392C58.5676 19.8254 58.4876 18.3921 58.7059 16.8393C58.9241 15.2866 59.407 13.8533 60.1545 12.5394C60.9048 11.2057 61.8511 10.0511 62.9933 9.07562C64.1556 8.10018 65.4681 7.34372 66.9307 6.80623C68.4134 6.26874 69.989 6 71.6575 6C73.326 6 74.8161 6.26874 76.1276 6.80623C77.4593 7.34372 78.5591 8.10018 79.4271 9.07562C80.3153 10.0511 80.9471 11.2057 81.3225 12.5394C81.7007 13.8533 81.7807 15.2866 81.5625 16.8393C81.3443 18.3921 80.8614 19.8254 80.1139 21.1392C79.3663 22.4531 78.41 23.6077 77.2449 24.603C76.1027 25.5785 74.7902 26.3349 73.3075 26.8724C71.8449 27.4099 70.2793 27.6786 68.6108 27.6786ZM69.341 22.4829C70.0848 22.4829 70.7778 22.3436 71.4201 22.0649C72.0651 21.7663 72.6351 21.3582 73.13 20.8406C73.6249 20.323 74.0304 19.7258 74.3467 19.049C74.6657 18.3523 74.8798 17.6157 74.9889 16.8393C75.098 16.063 75.0896 15.3364 74.9636 14.6595C74.8404 13.9628 74.6041 13.3556 74.2547 12.838C73.9053 12.3204 73.4486 11.9223 72.8847 11.6436C72.3236 11.345 71.6711 11.1957 70.9273 11.1957C70.1835 11.1957 69.4891 11.345 68.8441 11.6436C68.2018 11.9223 67.6333 12.3204 67.1384 12.838C66.6435 13.3556 66.2365 13.9628 65.9174 14.6595C65.6012 15.3364 65.3885 16.063 65.2794 16.8393C65.1703 17.6157 65.1773 18.3523 65.3005 19.049C65.4265 19.7258 65.6643 20.323 66.0137 20.8406C66.3631 21.3582 66.8183 21.7663 67.3795 22.0649C67.9434 22.3436 68.5972 22.4829 69.341 22.4829Z" fill="#F8FAFC"/>
        <path d="M87.441 27.6488C85.873 27.6488 84.4832 27.3104 83.2717 26.6335C82.0803 25.9567 81.1779 25.0111 80.5645 23.7968C79.9741 22.5626 79.7908 21.1492 80.0146 19.5566C80.2384 17.9641 80.8176 16.5606 81.7522 15.3463C82.7068 14.132 83.8851 13.1864 85.2868 12.5096C86.6914 11.8128 88.1777 11.4645 89.7457 11.4645C91.3137 11.4645 92.692 11.8128 93.8807 12.5096C95.0721 13.1864 95.9645 14.132 96.5577 15.3463C97.1509 16.5606 97.3357 17.9641 97.1118 19.5566C96.888 21.1492 96.3074 22.5626 95.3701 23.7968C94.4355 25.0111 93.2673 25.9567 91.8655 26.6335C90.4839 27.3104 89.009 27.6488 87.441 27.6488ZM88.1628 22.5128C88.7056 22.5128 89.2062 22.3834 89.6648 22.1246C90.1233 21.8658 90.4939 21.5175 90.7766 21.0795C91.0822 20.6216 91.2755 20.1041 91.3566 19.5268C91.4378 18.9495 91.3885 18.4418 91.2088 18.0039C91.0492 17.5659 90.7766 17.2176 90.3908 16.9588C90.005 16.7 89.5407 16.5706 88.998 16.5706C88.4552 16.5706 87.9545 16.7 87.496 16.9588C87.0375 17.2176 86.6568 17.5659 86.3541 18.0039C86.0513 18.4418 85.8593 18.9495 85.7782 19.5268C85.697 20.1041 85.7449 20.6216 85.9218 21.0795C86.1015 21.5175 86.3842 21.8658 86.77 22.1246C87.1558 22.3834 87.6201 22.5128 88.1628 22.5128Z" fill="#F8FAFC"/>
        <path d="M103.533 27.6488C101.965 27.6488 100.575 27.3104 99.3638 26.6335C98.1724 25.9567 97.27 25.0111 96.6567 23.7968C96.0662 22.5626 95.8829 21.1492 96.1067 19.5566C96.3306 17.9641 96.9098 16.5606 97.8443 15.3463C98.799 14.132 99.9772 13.1864 101.379 12.5096C102.784 11.8128 104.27 11.4645 105.838 11.4645C107.406 11.4645 108.784 11.8128 109.973 12.5096C111.164 13.1864 112.057 14.132 112.65 15.3463C113.243 16.5606 113.428 17.9641 113.204 19.5566C112.98 21.1492 112.4 22.5626 111.462 23.7968C110.528 25.0111 109.359 25.9567 107.958 26.6335C106.576 27.3104 105.101 27.6488 103.533 27.6488ZM104.255 22.5128C104.798 22.5128 105.298 22.3834 105.757 22.1246C106.215 21.8658 106.586 21.5175 106.869 21.0795C107.174 20.6216 107.368 20.1041 107.449 19.5268C107.53 18.9495 107.481 18.4418 107.301 18.0039C107.141 17.5659 106.869 17.2176 106.483 16.9588C106.097 16.7 105.633 16.5706 105.09 16.5706C104.547 16.5706 104.047 16.7 103.588 16.9588C103.13 17.2176 102.749 17.5659 102.446 18.0039C102.143 18.4418 101.951 18.9495 101.87 19.5268C101.789 20.1041 101.837 20.6216 102.014 21.0795C102.194 21.5175 102.476 21.8658 102.862 22.1246C103.248 22.3834 103.712 22.5128 104.255 22.5128Z" fill="#F8FAFC"/>
        <path d="M118.5 27.2905C117.072 27.2905 115.868 26.9919 114.886 26.3947C113.905 25.7974 113.191 25.0111 112.745 24.0357C112.302 23.0403 112.165 21.9455 112.333 20.751L113.898 9.61311C114.148 7.83203 115.809 6.38819 117.608 6.38819V6.38819C119.406 6.38819 120.661 7.83203 120.411 9.61311L118.837 20.8108C118.784 21.189 118.867 21.5274 119.087 21.826C119.329 22.1047 119.651 22.2441 120.053 22.2441H123.084C124.491 22.2441 125.473 23.3737 125.277 24.7673V24.7673C125.081 26.1608 123.782 27.2905 122.374 27.2905H118.5Z" fill="#F8FAFC"/>
      </g>
      <rect width="15.177" height="5.60699" rx="1.27592" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 5.1875 25.1313)" fill="#94A3B8"/>
      <rect x="14.1182" y="13.2996" width="15.177" height="5.60699" rx="1.27592" transform="rotate(26.7174 14.1182 13.2996)" fill="#94A3B8"/>
      <rect x="12.4492" y="19.177" width="15.177" height="5.60699" rx="1.27592" transform="rotate(-90 12.4492 19.177)" fill="#94A3B8"/>
      <rect x="5.1875" y="8.67847" width="15.177" height="5.60699" rx="1.27592" transform="rotate(26.7174 5.1875 8.67847)" fill="#AA55FF"/>
      <rect width="10.1473" height="5.60699" rx="0.850612" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 14.1182 20.5103)" fill="#AA55FF"/>
      <rect width="5.60553" height="5.60699" rx="0.850612" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 24.3271 15.3563)" fill="#33E364"/>
      <rect width="15.177" height="5.60699" rx="1.27592" transform="matrix(-4.37114e-08 1 1 4.37114e-08 12.4492 13.7822)" fill="#AA55FF"/>
    </g>
    <defs>
      <clipPath id="clip0_1722_2359">
        <rect width="128" height="34" fill="white"/>
      </clipPath>
      <clipPath id="clip1_1722_2359">
        <rect width="87.914" height="28" fill="white" transform="translate(40 6)"/>
      </clipPath>
    </defs>
  </Icon>
);

// LightLogo 아이콘
export const LightLogo = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <g clipPath="url(#clip0_1722_2358)">
      <g clipPath="url(#clip1_1722_2358)">
        <path d="M44.2147 27.2905C42.8075 27.2905 41.8255 26.1608 42.0213 24.7673V24.7673C42.2172 23.3737 43.5167 22.2441 44.9239 22.2441H51.3316C51.6734 22.2441 51.9646 22.1744 52.2053 22.035C52.4661 21.8957 52.6722 21.7165 52.8236 21.4975C52.9979 21.2587 53.1032 21.0098 53.1396 20.751C53.1788 20.4723 53.1434 20.2235 53.0334 20.0045C52.9464 19.7656 52.7921 19.5765 52.5704 19.4372C52.3689 19.2978 52.0972 19.2282 51.7555 19.2282H49.0416C47.735 19.2282 46.5839 18.9793 45.5884 18.4816C44.5929 17.984 43.8393 17.2673 43.3275 16.3317C42.8386 15.3762 42.6879 14.2315 42.8753 12.8978C43.06 11.5839 43.5224 10.4392 44.2625 9.46381C45.0027 8.48837 45.9232 7.7319 47.0239 7.19442C48.1247 6.65693 49.2983 6.38819 50.5446 6.38819H57.6157C59.0229 6.38819 60.0049 7.51786 59.8091 8.91139V8.91139C59.6133 10.3049 58.3137 11.4346 56.9065 11.4346H50.7099C50.4284 11.4346 50.1688 11.4943 49.9308 11.6138C49.713 11.7332 49.5298 11.8925 49.3812 12.0915C49.2527 12.2906 49.1717 12.5096 49.1381 12.7484C49.1046 12.9873 49.124 13.2063 49.1966 13.4054C49.2892 13.6044 49.4263 13.7737 49.6077 13.913C49.812 14.0324 50.0549 14.0922 50.3364 14.0922H53.2613C54.6886 14.0922 55.8972 14.3609 56.8871 14.8984C57.8798 15.416 58.6018 16.1426 59.0533 17.0782C59.5048 18.0138 59.641 19.1187 59.462 20.3927C59.2577 21.8459 58.7713 23.0901 58.0026 24.1253C57.2541 25.1604 56.3294 25.9467 55.2286 26.4842C54.1279 27.0217 52.9543 27.2905 51.7079 27.2905H44.2147Z" fill="#0F172A"/>
        <path d="M67.8285 33.3521C66.0383 33.3521 64.789 31.915 65.0381 30.1421L65.0885 29.7838C65.3376 28.011 66.9909 26.5738 68.7811 26.5738V26.5738C70.5714 26.5738 71.8207 28.011 71.5716 29.7838L71.5212 30.1421C71.272 31.915 69.6188 33.3521 67.8285 33.3521V33.3521ZM68.6108 27.6786C66.9423 27.6786 65.4422 27.4099 64.1106 26.8724C62.799 26.3349 61.6992 25.5785 60.811 24.603C59.9458 23.6077 59.3241 22.4531 58.9459 21.1392C58.5676 19.8254 58.4876 18.3921 58.7059 16.8393C58.9241 15.2866 59.407 13.8533 60.1545 12.5394C60.9048 11.2057 61.8511 10.0511 62.9933 9.07562C64.1556 8.10018 65.4681 7.34372 66.9307 6.80623C68.4134 6.26874 69.989 6 71.6575 6C73.326 6 74.8161 6.26874 76.1276 6.80623C77.4593 7.34372 78.5591 8.10018 79.4271 9.07562C80.3153 10.0511 80.9471 11.2057 81.3225 12.5394C81.7007 13.8533 81.7807 15.2866 81.5625 16.8393C81.3443 18.3921 80.8614 19.8254 80.1139 21.1392C79.3663 22.4531 78.41 23.6077 77.2449 24.603C76.1027 25.5785 74.7902 26.3349 73.3075 26.8724C71.8449 27.4099 70.2793 27.6786 68.6108 27.6786ZM69.341 22.4829C70.0848 22.4829 70.7778 22.3436 71.4201 22.0649C72.0651 21.7663 72.6351 21.3582 73.13 20.8406C73.6249 20.323 74.0304 19.7258 74.3467 19.049C74.6657 18.3523 74.8798 17.6157 74.9889 16.8393C75.098 16.063 75.0896 15.3364 74.9636 14.6595C74.8404 13.9628 74.6041 13.3556 74.2547 12.838C73.9053 12.3204 73.4486 11.9223 72.8847 11.6436C72.3236 11.345 71.6711 11.1957 70.9273 11.1957C70.1835 11.1957 69.4891 11.345 68.8441 11.6436C68.2018 11.9223 67.6333 12.3204 67.1384 12.838C66.6435 13.3556 66.2365 13.9628 65.9174 14.6595C65.6012 15.3364 65.3885 16.063 65.2794 16.8393C65.1703 17.6157 65.1773 18.3523 65.3005 19.049C65.4265 19.7258 65.6643 20.323 66.0137 20.8406C66.3631 21.3582 66.8183 21.7663 67.3795 22.0649C67.9434 22.3436 68.5972 22.4829 69.341 22.4829Z" fill="#0F172A"/>
        <path d="M87.441 27.6488C85.873 27.6488 84.4832 27.3104 83.2717 26.6335C82.0803 25.9567 81.1779 25.0111 80.5645 23.7968C79.9741 22.5626 79.7908 21.1492 80.0146 19.5566C80.2384 17.9641 80.8176 16.5606 81.7522 15.3463C82.7068 14.132 83.8851 13.1864 85.2868 12.5096C86.6914 11.8128 88.1777 11.4645 89.7457 11.4645C91.3137 11.4645 92.692 11.8128 93.8807 12.5096C95.0721 13.1864 95.9645 14.132 96.5577 15.3463C97.1509 16.5606 97.3357 17.9641 97.1118 19.5566C96.888 21.1492 96.3074 22.5626 95.3701 23.7968C94.4355 25.0111 93.2673 25.9567 91.8655 26.6335C90.4839 27.3104 89.009 27.6488 87.441 27.6488ZM88.1628 22.5128C88.7056 22.5128 89.2062 22.3834 89.6648 22.1246C90.1233 21.8658 90.4939 21.5175 90.7766 21.0795C91.0822 20.6216 91.2755 20.1041 91.3566 19.5268C91.4378 18.9495 91.3885 18.4418 91.2088 18.0039C91.0492 17.5659 90.7766 17.2176 90.3908 16.9588C90.005 16.7 89.5407 16.5706 88.998 16.5706C88.4552 16.5706 87.9545 16.7 87.496 16.9588C87.0375 17.2176 86.6568 17.5659 86.3541 18.0039C86.0513 18.4418 85.8593 18.9495 85.7782 19.5268C85.697 20.1041 85.7449 20.6216 85.9218 21.0795C86.1015 21.5175 86.3842 21.8658 86.77 22.1246C87.1558 22.3834 87.6201 22.5128 88.1628 22.5128Z" fill="#0F172A"/>
        <path d="M103.533 27.6488C101.965 27.6488 100.575 27.3104 99.3638 26.6335C98.1724 25.9567 97.27 25.0111 96.6567 23.7968C96.0662 22.5626 95.8829 21.1492 96.1067 19.5566C96.3306 17.9641 96.9098 16.5606 97.8443 15.3463C98.799 14.132 99.9772 13.1864 101.379 12.5096C102.784 11.8128 104.27 11.4645 105.838 11.4645C107.406 11.4645 108.784 11.8128 109.973 12.5096C111.164 13.1864 112.057 14.132 112.65 15.3463C113.243 16.5606 113.428 17.9641 113.204 19.5566C112.98 21.1492 112.4 22.5626 111.462 23.7968C110.528 25.0111 109.359 25.9567 107.958 26.6335C106.576 27.3104 105.101 27.6488 103.533 27.6488ZM104.255 22.5128C104.798 22.5128 105.298 22.3834 105.757 22.1246C106.215 21.8658 106.586 21.5175 106.869 21.0795C107.174 20.6216 107.368 20.1041 107.449 19.5268C107.53 18.9495 107.481 18.4418 107.301 18.0039C107.141 17.5659 106.869 17.2176 106.483 16.9588C106.097 16.7 105.633 16.5706 105.09 16.5706C104.547 16.5706 104.047 16.7 103.588 16.9588C103.13 17.2176 102.749 17.5659 102.446 18.0039C102.143 18.4418 101.951 18.9495 101.87 19.5268C101.789 20.1041 101.837 20.6216 102.014 21.0795C102.194 21.5175 102.476 21.8658 102.862 22.1246C103.248 22.3834 103.712 22.5128 104.255 22.5128Z" fill="#0F172A"/>
        <path d="M118.5 27.2905C117.072 27.2905 115.868 26.9919 114.886 26.3947C113.905 25.7974 113.191 25.0111 112.745 24.0357C112.302 23.0403 112.165 21.9455 112.333 20.751L113.898 9.61311C114.148 7.83203 115.809 6.38819 117.608 6.38819V6.38819C119.406 6.38819 120.661 7.83203 120.411 9.61311L118.837 20.8108C118.784 21.189 118.867 21.5274 119.087 21.826C119.329 22.1047 119.651 22.2441 120.053 22.2441H123.084C124.491 22.2441 125.473 23.3737 125.277 24.7673V24.7673C125.081 26.1608 123.782 27.2905 122.374 27.2905H118.5Z" fill="#0F172A"/>
      </g>
      <rect width="15.177" height="5.60699" rx="1.27592" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 5.1875 25.1313)" fill="#CBD5E1"/>
      <rect x="14.1182" y="13.2996" width="15.177" height="5.60699" rx="1.27592" transform="rotate(26.7174 14.1182 13.2996)" fill="#CBD5E1"/>
      <rect x="12.4492" y="19.177" width="15.177" height="5.60699" rx="1.27592" transform="rotate(-90 12.4492 19.177)" fill="#CBD5E1"/>
      <rect x="5.1875" y="8.67847" width="15.177" height="5.60699" rx="1.27592" transform="rotate(26.7174 5.1875 8.67847)" fill="#8A2BE2"/>
      <rect width="10.1473" height="5.60699" rx="0.850612" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 14.1182 20.5103)" fill="#8A2BE2"/>
      <rect width="5.60553" height="5.60699" rx="0.850612" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 24.3271 15.3563)" fill="#0CAD4D"/>
      <rect width="15.177" height="5.60699" rx="1.27592" transform="matrix(-4.37114e-08 1 1 4.37114e-08 12.4492 13.7822)" fill="#8A2BE2"/>
    </g>
    <defs>
      <clipPath id="clip0_1722_2358">
        <rect width="128" height="34" fill="white"/>
      </clipPath>
      <clipPath id="clip1_1722_2358">
        <rect width="87.914" height="28" fill="white" transform="translate(40 6)"/>
      </clipPath>
    </defs>
  </Icon>
);

// DarkLogo 아이콘
export const DarkToggle = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <rect width="24" height="24" rx="8" fill="#111519"/>
    <path d="M9.5 17.8334C9.5 18.5334 9.60833 19.2167 9.80833 19.8501C6.60833 18.7417 4.19167 15.8001 3.94167 12.3584C3.69167 8.70006 5.8 5.28339 9.20833 3.85006C10.0917 3.48339 10.5417 3.75006 10.7333 3.94172C10.9167 4.12506 11.175 4.56672 10.8083 5.40839C10.4333 6.27506 10.25 7.19172 10.25 8.14172C10.2583 9.84172 10.925 11.4167 12.0083 12.6251C10.4833 13.8417 9.5 15.7251 9.5 17.8334Z" fill="#0071FF"/>
    <path d="M19.675 16.7667C18.025 19.0083 15.4083 20.325 12.6167 20.325C12.4833 20.325 12.35 20.3167 12.2167 20.3083C11.3833 20.275 10.575 20.1167 9.80833 19.85C9.60833 19.2167 9.5 18.5333 9.5 17.8333C9.5 15.725 10.4833 13.8417 12.0083 12.625C13.2333 14 14.9917 14.8917 16.9333 14.975C17.4583 15 17.9833 14.9583 18.5 14.8667C19.4333 14.7 19.8083 15.05 19.9417 15.275C20.0833 15.5 20.2333 15.9917 19.675 16.7667Z" fill="#AFD2FF"/>
  </Icon>
);

// LightLogo 아이콘
export const LightToggle = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <rect width="24" height="24" rx="8" fill="white"/>
    <path d="M11.9998 17.8334C15.2215 17.8334 17.8332 15.2217 17.8332 12.0001C17.8332 8.77842 15.2215 6.16675 11.9998 6.16675C8.77818 6.16675 6.1665 8.77842 6.1665 12.0001C6.1665 15.2217 8.77818 17.8334 11.9998 17.8334Z" fill="#FEC942"/>
    <path d="M12.0002 21.1333C11.5418 21.1333 11.1668 20.7916 11.1668 20.3333V20.2666C11.1668 19.8083 11.5418 19.4333 12.0002 19.4333C12.4585 19.4333 12.8335 19.8083 12.8335 20.2666C12.8335 20.7249 12.4585 21.1333 12.0002 21.1333ZM17.9502 18.7833C17.7335 18.7833 17.5252 18.6999 17.3585 18.5416L17.2502 18.4333C16.9252 18.1083 16.9252 17.5833 17.2502 17.2583C17.5752 16.9333 18.1002 16.9333 18.4252 17.2583L18.5335 17.3666C18.8585 17.6916 18.8585 18.2166 18.5335 18.5416C18.3752 18.6999 18.1668 18.7833 17.9502 18.7833ZM6.05016 18.7833C5.8335 18.7833 5.62516 18.6999 5.4585 18.5416C5.1335 18.2166 5.1335 17.6916 5.4585 17.3666L5.56683 17.2583C5.89183 16.9333 6.41683 16.9333 6.74183 17.2583C7.06683 17.5833 7.06683 18.1083 6.74183 18.4333L6.6335 18.5416C6.47516 18.6999 6.2585 18.7833 6.05016 18.7833ZM20.3335 12.8333H20.2668C19.8085 12.8333 19.4335 12.4583 19.4335 11.9999C19.4335 11.5416 19.8085 11.1666 20.2668 11.1666C20.7252 11.1666 21.1335 11.5416 21.1335 11.9999C21.1335 12.4583 20.7918 12.8333 20.3335 12.8333ZM3.7335 12.8333H3.66683C3.2085 12.8333 2.8335 12.4583 2.8335 11.9999C2.8335 11.5416 3.2085 11.1666 3.66683 11.1666C4.12516 11.1666 4.5335 11.5416 4.5335 11.9999C4.5335 12.4583 4.19183 12.8333 3.7335 12.8333ZM17.8418 6.99158C17.6252 6.99158 17.4168 6.90825 17.2502 6.74992C16.9252 6.42492 16.9252 5.89992 17.2502 5.57492L17.3585 5.46659C17.6835 5.14159 18.2085 5.14159 18.5335 5.46659C18.8585 5.79158 18.8585 6.31659 18.5335 6.64159L18.4252 6.74992C18.2668 6.90825 18.0585 6.99158 17.8418 6.99158ZM6.1585 6.99158C5.94183 6.99158 5.7335 6.90825 5.56683 6.74992L5.4585 6.63325C5.1335 6.30825 5.1335 5.78325 5.4585 5.45825C5.7835 5.13325 6.3085 5.13325 6.6335 5.45825L6.74183 5.56659C7.06683 5.89159 7.06683 6.41659 6.74183 6.74159C6.5835 6.90825 6.36683 6.99158 6.1585 6.99158ZM12.0002 4.53325C11.5418 4.53325 11.1668 4.19159 11.1668 3.73325V3.66659C11.1668 3.20825 11.5418 2.83325 12.0002 2.83325C12.4585 2.83325 12.8335 3.20825 12.8335 3.66659C12.8335 4.12492 12.4585 4.53325 12.0002 4.53325Z" fill="#FF9900"/>
  </Icon>
);


// MemberGithub 아이콘
export const MemberGithub = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <g clipPath="url(#clip0_1725_1819)">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0004 2.41699C9.62639 2.41822 7.33025 3.25904 5.52253 4.78909C3.71482 6.31915 2.5134 8.43867 2.1331 10.7687C1.7528 13.0986 2.21841 15.4872 3.4467 17.5071C4.67499 19.5271 6.58584 21.0468 8.83758 21.7945C9.33435 21.8867 9.52147 21.5788 9.52147 21.317C9.52147 21.0552 9.51153 20.2962 9.50822 19.4663C6.72631 20.0673 6.13846 18.2924 6.13846 18.2924C5.68475 17.1399 5.02901 16.8369 5.02901 16.8369C4.12157 16.2211 5.0969 16.2326 5.0969 16.2326C6.10204 16.3034 6.63027 17.2584 6.63027 17.2584C7.52115 18.7781 8.97005 18.3385 9.53969 18.0816C9.6291 17.4379 9.88909 16.9999 10.1756 16.7513C7.95333 16.501 5.61851 15.6481 5.61851 11.8382C5.60473 10.8501 5.97349 9.89454 6.64848 9.16923C6.54582 8.91896 6.20304 7.90802 6.74618 6.53485C6.74618 6.53485 7.58573 6.26812 9.49664 7.55403C11.1357 7.10835 12.865 7.10835 14.5041 7.55403C16.4133 6.26812 17.2512 6.53485 17.2512 6.53485C17.796 7.90473 17.4533 8.91567 17.3506 9.16923C18.0277 9.89465 18.3972 10.8519 18.3822 11.8415C18.3822 15.6597 16.0424 16.501 13.8169 16.7463C14.1746 17.0559 14.4942 17.6601 14.4942 18.5888C14.4942 19.9191 14.4826 20.9893 14.4826 21.317C14.4826 21.5821 14.663 21.8916 15.1698 21.7945C17.4218 21.0467 19.3328 19.5267 20.5611 17.5064C21.7893 15.4861 22.2547 13.0972 21.874 10.767C21.4932 8.43683 20.2912 6.31729 18.4829 4.7875C16.6746 3.25771 14.3779 2.41744 12.0037 2.41699H12.0004Z" fill=""/>
    </g>
    <defs>
      <clipPath id="clip0_1725_1819">
        <rect width="20" height="20" fill="none" transform="translate(2 2)"/>
      </clipPath>
    </defs>
  </Icon>
);

// MemberEmail 아이콘
export const MemberEmail = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill=""/>
  </Icon>
);

// HeroBtn 아이콘
export const HeroBtn = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <path opacity="0.4" d="M22 8.5V16.69C22 20.33 19.83 22.5 16.19 22.5H7.81C4.17 22.5 2 20.33 2 16.69V8.51L22 8.5Z" fill=""/>
    <path d="M8.99996 18.2499C8.88996 18.2499 8.76996 18.2199 8.66996 18.1699C7.89996 17.7799 7.23996 17.1999 6.75996 16.4799C6.35996 15.8799 6.35996 15.1099 6.75996 14.5099C7.23996 13.7899 7.89996 13.2099 8.66996 12.8299C9.03996 12.6399 9.48996 12.7999 9.67996 13.1699C9.86996 13.5399 9.71996 13.9899 9.33996 14.1799C8.79996 14.4499 8.33996 14.8599 8.00996 15.3599C7.94996 15.4499 7.94996 15.5699 8.00996 15.6699C8.33996 16.1699 8.79996 16.5799 9.33996 16.8499C9.70996 17.0399 9.85996 17.4899 9.67996 17.8599C9.53996 18.0999 9.26996 18.2499 8.99996 18.2499Z" fill=""/>
    <path d="M15.2102 18.2499C14.9302 18.2499 14.6702 18.0999 14.5402 17.8399C14.3502 17.4699 14.5002 17.0199 14.8802 16.8299C15.4202 16.5599 15.8802 16.1499 16.2102 15.6499C16.2702 15.5599 16.2702 15.4399 16.2102 15.3399C15.8802 14.8399 15.4202 14.4299 14.8802 14.1599C14.5102 13.9699 14.3602 13.5199 14.5402 13.1499C14.7302 12.7799 15.1802 12.6299 15.5502 12.8099C16.3202 13.1999 16.9802 13.7799 17.4602 14.4999C17.8602 15.0999 17.8602 15.8699 17.4602 16.4699C16.9802 17.1899 16.3202 17.7699 15.5502 18.1499C15.4302 18.2199 15.3202 18.2499 15.2102 18.2499Z" fill=""/>
    <path d="M22 8.31V8.5L2 8.51V8.31C2 4.67 4.17 2.5 7.81 2.5H16.19C19.83 2.5 22 4.67 22 8.31Z" fill=""/>
  </Icon>
);

// ScrollDown 아이콘
export const ScrollDown = ({ title, width, height, fill, stroke, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <g clipPath="url(#clip0_1713_735)">
      <rect x="1" y="1" width="30" height="46" rx="15" fill="none" stroke="" strokeWidth="2"/>
      <rect x="14" y="12" width="4" height="8" rx="2" fill=""/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 54.2929C10.9024 54.6834 10.9024 55.3166 11.2929 55.7071L15.5355 59.9497C15.7682 60.1824 16.087 60.2765 16.3893 60.2319C16.6915 60.2765 17.0103 60.1824 17.243 59.9497L21.4856 55.7071C21.8761 55.3166 21.8761 54.6834 21.4856 54.2929C21.0951 53.9024 20.4619 53.9024 20.0714 54.2929L16.3893 57.975L12.7071 54.2929C12.3166 53.9024 11.6834 53.9024 11.2929 54.2929Z" fill=""/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 60.2929C10.9024 60.6834 10.9024 61.3166 11.2929 61.7071L15.5355 65.9497C15.7682 66.1824 16.087 66.2765 16.3893 66.2319C16.6915 66.2765 17.0103 66.1824 17.243 65.9497L21.4856 61.7071C21.8761 61.3166 21.8761 60.6834 21.4856 60.2929C21.0951 59.9024 20.4619 59.9024 20.0714 60.2929L16.3893 63.975L12.7071 60.2929C12.3166 59.9024 11.6834 59.9024 11.2929 60.2929Z" fill=""/>
    </g>
    <defs>
      <clipPath id="clip0_1713_735">
        <rect width="32" height="67" fill="none"/>
      </clipPath>
    </defs>
  </Icon>
);

// LinkWISE 아이콘
export const LinkWISE = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <rect width="11.3827" height="4.20524" rx="0.956938" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 1.89062 16.5088)" fill=""/>
    <rect x="8.58887" y="7.63574" width="11.3827" height="4.20524" rx="0.956938" transform="rotate(26.7174 8.58887 7.63574)" fill="#"/>
    <rect x="7.33691" y="12.043" width="11.3827" height="4.20524" rx="0.956938" transform="rotate(-90 7.33691 12.043)" fill=""/>
    <rect x="1.89062" y="4.16895" width="11.3827" height="4.20524" rx="0.956938" transform="rotate(26.7174 1.89062 4.16895)" fill="#"/>
    <rect width="7.61044" height="4.20524" rx="0.637959" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 8.58887 13.043)" fill=""/>
    <rect width="4.20415" height="4.20524" rx="0.637959" transform="matrix(0.893235 -0.44959 -0.44959 -0.893235 16.2451 9.17676)" fill="#94A3B8"/>
    <rect width="11.3827" height="4.20524" rx="0.956938" transform="matrix(-4.37114e-08 1 1 4.37114e-08 7.33691 7.99707)" fill=""/>
  </Icon>
);

// LinkGithub 아이콘
export const LinkGithub = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <g clipPath="url(#clip0_1704_339)">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 0.416504C7.62614 0.417736 5.33001 1.25855 3.52229 2.78861C1.71457 4.31866 0.513151 6.43818 0.132852 8.76817C-0.247447 11.0982 0.218171 13.4867 1.44646 15.5067C2.67474 17.5266 4.5856 19.0463 6.83734 19.794C7.33411 19.8862 7.52123 19.5783 7.52123 19.3165C7.52123 19.0547 7.51129 18.2957 7.50798 17.4659C4.72606 18.0668 4.13822 16.2919 4.13822 16.2919C3.6845 15.1394 3.02876 14.8364 3.02876 14.8364C2.12133 14.2206 3.09666 14.2322 3.09666 14.2322C4.10179 14.303 4.63003 15.2579 4.63003 15.2579C5.5209 16.7776 6.96981 16.338 7.53944 16.0812C7.62886 15.4374 7.88884 14.9994 8.17531 14.7508C5.95309 14.5005 3.61826 13.6477 3.61826 9.83769C3.60449 8.84959 3.97325 7.89405 4.64824 7.16874C4.54557 6.91847 4.2028 5.90753 4.74593 4.53436C4.74593 4.53436 5.58548 4.26763 7.4964 5.55354C9.13545 5.10786 10.8648 5.10786 12.5038 5.55354C14.4131 4.26763 15.251 4.53436 15.251 4.53436C15.7958 5.90424 15.453 6.91518 15.3503 7.16874C16.0275 7.89416 16.397 8.85138 16.382 9.84098C16.382 13.6592 14.0422 14.5005 11.8166 14.7459C12.1743 15.0554 12.4939 15.6597 12.4939 16.5883C12.4939 17.9186 12.4823 18.9888 12.4823 19.3165C12.4823 19.5816 12.6628 19.8911 13.1695 19.794C15.4215 19.0462 17.3326 17.5263 18.5608 15.5059C19.7891 13.4856 20.2545 11.0968 19.8737 8.76655C19.493 6.43634 18.291 4.3168 16.4827 2.78701C14.6744 1.25722 12.3777 0.416955 10.0034 0.416504H10.0001Z" fill=""/>
    </g>
    <defs>
      <clipPath id="clip0_1704_339">
        <rect width="20" height="20" fill="none"/>
      </clipPath>
    </defs>
  </Icon>
);

// LinkDiscord 아이콘
export const LinkDiscord = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <path d="M8.23997 8.39014C7.66997 8.39014 7.21997 8.89014 7.21997 9.50014C7.21997 10.1101 7.67997 10.6101 8.23997 10.6101C8.80997 10.6101 9.25997 10.1101 9.25997 9.50014C9.26997 8.89014 8.80997 8.39014 8.23997 8.39014ZM11.89 8.39014C11.32 8.39014 10.87 8.89014 10.87 9.50014C10.87 10.1101 11.33 10.6101 11.89 10.6101C12.46 10.6101 12.91 10.1101 12.91 9.50014C12.91 8.89014 12.46 8.39014 11.89 8.39014Z" fill="#94A3B8"/>
    <path d="M16.75 0H3.35005C2.22005 0 1.30005 0.92 1.30005 2.06V15.58C1.30005 16.72 2.22005 17.64 3.35005 17.64H14.69L14.16 15.79L15.44 16.98L16.65 18.1L18.8 20V2.06C18.8 0.92 17.88 0 16.75 0ZM12.89 13.06C12.89 13.06 12.53 12.63 12.23 12.25C13.54 11.88 14.04 11.06 14.04 11.06C13.63 11.33 13.24 11.52 12.89 11.65C12.39 11.86 11.91 12 11.44 12.08C10.48 12.26 9.60005 12.21 8.85005 12.07C8.28005 11.96 7.79005 11.8 7.38005 11.64C7.15005 11.55 6.90005 11.44 6.65005 11.3C6.62005 11.28 6.59005 11.27 6.56005 11.25C6.54005 11.24 6.53005 11.23 6.52005 11.22C6.34005 11.12 6.24005 11.05 6.24005 11.05C6.24005 11.05 6.72005 11.85 7.99005 12.23C7.69005 12.61 7.32005 13.06 7.32005 13.06C5.11005 12.99 4.27005 11.54 4.27005 11.54C4.27005 8.32 5.71005 5.71 5.71005 5.71C7.15005 4.63 8.52005 4.66 8.52005 4.66L8.62005 4.78C6.82005 5.3 5.99005 6.09 5.99005 6.09C5.99005 6.09 6.21005 5.97 6.58005 5.8C7.65005 5.33 8.50005 5.2 8.85005 5.17C8.91005 5.16 8.96005 5.15 9.02005 5.15C9.63005 5.07 10.32 5.05 11.04 5.13C11.99 5.24 13.01 5.52 14.05 6.09C14.05 6.09 13.26 5.34 11.5601 4.82L11.7 4.66C11.7 4.66 13.07 4.63 14.51 5.71C14.51 5.71 15.95 8.32 15.95 11.54C15.95 11.54 15.1 12.99 12.89 13.06Z" fill=""/>
  </Icon>
);

// CodeCopy 아이콘
export const CodeCopy = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <path opacity="0.4" d="M17.1 2H12.9C9.45001 2 8.05001 3.37 8.01001 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V15.99C20.63 15.95 22 14.55 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" fill="#33E364"/>
    <path d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z" fill=""/>
  </Icon>
);

// DBReset 아이콘
export const DBReset = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <path opacity="0.4" d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill=""/>
<path d="M18.0004 11.27C17.5804 11.27 17.2504 11.6 17.2504 12.02C17.2404 13.42 16.7004 14.73 15.7204 15.71C14.7304 16.7 13.4104 17.25 12.0104 17.25C10.6104 17.25 9.29038 16.7 8.30038 15.71C8.27038 15.68 8.2504 15.65 8.2204 15.62H9.05038C9.46038 15.62 9.80038 15.28 9.80038 14.87C9.80038 14.46 9.46038 14.12 9.05038 14.12H6.40039C5.99039 14.12 5.65039 14.46 5.65039 14.87V17.52C5.65039 17.93 5.99039 18.27 6.40039 18.27C6.81039 18.27 7.15039 17.93 7.15039 17.52V16.67C7.18039 16.7 7.21039 16.74 7.24039 16.78C8.51039 18.05 10.2104 18.76 12.0104 18.76C13.8104 18.76 15.5104 18.06 16.7804 16.78C18.0404 15.52 18.7404 13.83 18.7504 12.03C18.7504 11.61 18.4104 11.28 18.0004 11.27Z" fill=""/>
<path d="M6.00022 12.65C6.41022 12.65 6.74022 12.32 6.75022 11.91C6.77022 10.54 7.32022 9.25 8.28022 8.28C9.27022 7.29 10.5902 6.74 11.9902 6.74C13.3902 6.74 14.7102 7.29 15.7002 8.28C15.7302 8.31 15.7502 8.34 15.7802 8.37H14.9502C14.5402 8.37 14.2002 8.71 14.2002 9.12C14.2002 9.53 14.5402 9.87 14.9502 9.87H17.6002C18.0102 9.87 18.3502 9.53 18.3502 9.12V6.48C18.3502 6.07 18.0102 5.73 17.6002 5.73C17.1902 5.73 16.8502 6.07 16.8502 6.48V7.34C16.8202 7.31 16.7902 7.27 16.7602 7.23C15.4902 5.96 13.7902 5.25 11.9902 5.25C10.1902 5.25 8.49022 5.95 7.22022 7.23C5.97022 8.47 5.27022 10.13 5.25022 11.89C5.24022 12.3 5.57021 12.64 5.99021 12.65C6.00021 12.65 6.00022 12.65 6.00022 12.65Z" fill=""/>
  </Icon>
);

// SlidePlay 아이콘
export const SlidePlay = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <path opacity="0.4" d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z" fill=""/>
    <path d="M14.9699 10.2301L12.0699 8.56012C11.3499 8.14012 10.4799 8.14012 9.75986 8.56012C9.03986 8.98012 8.60986 9.72012 8.60986 10.5601V13.9101C8.60986 14.7401 9.03986 15.4901 9.75986 15.9101C10.1199 16.1201 10.5199 16.2201 10.9099 16.2201C11.3099 16.2201 11.6999 16.1201 12.0599 15.9101L14.9599 14.2401C15.6799 13.8201 16.1099 13.0801 16.1099 12.2401C16.1299 11.4001 15.6999 10.6501 14.9699 10.2301Z" fill=""/>
  </Icon>
);

// SlidePause 아이콘
export const SlidePause = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <path opacity="0.4" d="M11.9702 22C17.4931 22 21.9702 17.5228 21.9702 12C21.9702 6.47715 17.4931 2 11.9702 2C6.44737 2 1.97021 6.47715 1.97021 12C1.97021 17.5228 6.44737 22 11.9702 22Z" fill=""/>
    <path d="M10.72 15.0298V8.9698C10.72 8.4898 10.52 8.2998 10.01 8.2998H8.71C8.2 8.2998 8 8.4898 8 8.9698V15.0298C8 15.5098 8.2 15.6998 8.71 15.6998H10C10.52 15.6998 10.72 15.5098 10.72 15.0298Z" fill=""/>
    <path d="M16 15.0298V8.9698C16 8.4898 15.8 8.2998 15.29 8.2998H14C13.49 8.2998 13.29 8.4898 13.29 8.9698V15.0298C13.29 15.5098 13.49 15.6998 14 15.6998H15.29C15.8 15.6998 16 15.5098 16 15.0298Z" fill=""/>
  </Icon>
);

// ResizeRow 아이콘
export const ResizeRow = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <rect x="4" y="4" width="40" height="2" fill=""/>
    <rect x="4" y="10" width="40" height="2" fill=""/>
  </Icon>
);

// ResizeColumn 아이콘
export const ResizeColumn = ({ title, width, height, ...props }) => (
  <Icon title={title} width={width} height={height} {...props}>
    <rect x="4" y="4" width="2" height="40" fill=""/>
    <rect x="10" y="4" width="2" height="40" fill=""/>
  </Icon>
);