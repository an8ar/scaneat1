import { memo } from 'react';

import { useTheme } from '@mui/material';

export const Logo = memo(function Logo() {
  const theme = useTheme();

  return (
    <svg
      width="152"
      height="36"
      viewBox="0 0 152 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.47295 26.0252C0.972339 25.4091 0.722034 24.8603 0.722034 24.379C0.722034 23.8784 1.136 23.2237 1.96393 22.4151C2.44529 21.953 2.95552 21.7219 3.49464 21.7219C4.03376 21.7219 4.78468 22.2033 5.74739 23.166C6.01695 23.4933 6.40203 23.811 6.90264 24.1191C7.40325 24.4079 7.86535 24.5523 8.28895 24.5523C10.0796 24.5523 10.9749 23.8206 10.9749 22.3573C10.9749 21.9144 10.7246 21.5486 10.224 21.2598C9.74264 20.9517 9.13613 20.7303 8.40447 20.5955C7.67281 20.4607 6.88339 20.249 6.0362 19.9601C5.18902 19.6521 4.39959 19.2959 3.66793 18.8915C2.93627 18.4872 2.32014 17.8518 1.81953 16.9854C1.33817 16.0997 1.09749 15.0407 1.09749 13.8084C1.09749 12.114 1.72325 10.6411 2.97478 9.38956C4.24556 8.11878 5.96881 7.48339 8.14454 7.48339C9.29979 7.48339 10.3492 7.63743 11.2926 7.9455C12.2553 8.23431 12.9196 8.53275 13.2854 8.84082L14.0075 9.38956C14.6043 9.94794 14.9028 10.4197 14.9028 10.8047C14.9028 11.1898 14.6717 11.7193 14.2096 12.3932C13.555 13.3559 12.8811 13.8373 12.1879 13.8373C11.7836 13.8373 11.283 13.6447 10.6861 13.2597C10.6283 13.2212 10.5128 13.1249 10.3395 12.9709C10.1855 12.8168 10.0411 12.6917 9.9063 12.5954C9.50196 12.3451 8.9821 12.2199 8.34671 12.2199C7.73057 12.2199 7.21071 12.374 6.78712 12.682C6.38278 12.9709 6.18061 13.3848 6.18061 13.9239C6.18061 14.4438 6.42129 14.8674 6.90264 15.1947C7.40325 15.522 8.01939 15.7435 8.75105 15.859C9.48271 15.9745 10.2818 16.1574 11.1482 16.4077C12.0146 16.6388 12.8137 16.9276 13.5454 17.2742C14.277 17.6207 14.8835 18.2273 15.3649 19.0937C15.8655 19.9409 16.1158 20.9902 16.1158 22.2418C16.1158 23.4933 15.8655 24.6004 15.3649 25.5631C14.8643 26.5066 14.2096 27.2382 13.4009 27.7581C11.8414 28.7786 10.1759 29.2888 8.40447 29.2888C7.49952 29.2888 6.64271 29.1829 5.83403 28.9711C5.02536 28.7401 4.37071 28.4609 3.8701 28.1336C2.84963 27.5174 2.13722 26.9205 1.73288 26.3429L1.47295 26.0252ZM22.7587 21.4042C22.7587 22.2129 23.0283 22.8483 23.5674 23.3104C24.1065 23.7532 24.6745 23.9746 25.2714 23.9746C25.8875 23.9746 26.4555 23.8014 26.9754 23.4548C27.5145 23.089 27.9477 22.906 28.2751 22.906C28.8527 22.906 29.5555 23.4163 30.3834 24.4367C30.8263 24.9951 31.0477 25.4957 31.0477 25.9386C31.0477 26.6702 30.5182 27.3538 29.4592 27.9892C28.3617 28.7593 27.0139 29.1444 25.4158 29.1444C23.6252 29.1444 21.9019 28.4994 20.2461 27.2094C19.4566 26.5932 18.8116 25.7749 18.311 24.7544C17.8104 23.7147 17.5601 22.5787 17.5601 21.3464C17.5601 20.0949 17.8104 18.9685 18.311 17.9673C18.8116 16.9468 19.4566 16.1285 20.2461 15.5124C21.8442 14.2416 23.5482 13.6062 25.3581 13.6062C26.0897 13.6062 26.8021 13.7121 27.4953 13.9239C28.1884 14.1165 28.6987 14.309 29.026 14.5016L29.4881 14.7904C29.8347 15.0214 30.1042 15.2043 30.2968 15.3391C30.7974 15.7242 31.0477 16.1671 31.0477 16.6677C31.0477 17.149 30.8455 17.6978 30.4412 18.3139C29.748 19.3729 29.0837 19.9024 28.4484 19.9024C28.0825 19.9024 27.5627 19.6906 26.8888 19.267C26.5422 18.9397 26.0416 18.776 25.3869 18.776C24.7515 18.776 24.1547 19.0071 23.5963 19.4692C23.0379 19.9313 22.7587 20.5763 22.7587 21.4042ZM42.7909 15.3969C42.9064 14.3186 43.6669 13.7795 45.0725 13.7795C45.8234 13.7795 46.3818 13.8373 46.7476 13.9528C47.1135 14.0683 47.3638 14.2705 47.4985 14.5593C47.6526 14.8481 47.7392 15.1081 47.7585 15.3391C47.797 15.5509 47.8162 15.8782 47.8162 16.3211V26.4296C47.8162 26.8724 47.797 27.2094 47.7585 27.4404C47.7392 27.6522 47.6622 27.9025 47.5274 28.1913C47.2579 28.6919 46.5936 28.9422 45.5346 28.9422C44.4949 28.9422 43.7921 28.8171 43.4263 28.5668C43.0797 28.2972 42.8775 27.9121 42.8198 27.4115C42.1074 28.432 40.9136 28.9422 39.2385 28.9422C37.5826 28.9422 36.0423 28.1817 34.6175 26.6606C33.1926 25.1395 32.4802 23.3778 32.4802 21.3753C32.4802 19.3536 33.1926 17.5919 34.6175 16.09C36.0615 14.569 37.6404 13.8084 39.354 13.8084C40.0086 13.8084 40.6055 13.9239 41.1446 14.155C41.6838 14.386 42.0592 14.6075 42.271 14.8193C42.4828 15.0118 42.6561 15.2043 42.7909 15.3969ZM37.5345 21.4042C37.5345 22.0396 37.7848 22.6172 38.2854 23.1371C38.786 23.6377 39.3925 23.888 40.1049 23.888C40.8173 23.888 41.4046 23.6281 41.8667 23.1082C42.348 22.5883 42.5887 22.0203 42.5887 21.4042C42.5887 20.7688 42.3577 20.1816 41.8956 19.6424C41.4527 19.1033 40.8462 18.8338 40.076 18.8338C39.3251 18.8338 38.709 19.1033 38.2276 19.6424C37.7655 20.1816 37.5345 20.7688 37.5345 21.4042ZM58.5804 13.7795C60.5058 13.7795 62.1039 14.5208 63.3747 16.0034C64.6647 17.4667 65.3098 19.2574 65.3098 21.3753V26.4584C65.3098 26.9013 65.2905 27.2382 65.252 27.4693C65.2327 27.6811 65.1557 27.9218 65.0209 28.1913C64.7514 28.7112 64.0005 28.9711 62.7682 28.9711C61.4011 28.9711 60.6117 28.6149 60.3999 27.9025C60.2844 27.5752 60.2266 27.0842 60.2266 26.4296V21.3464C60.2266 20.557 59.9956 19.9409 59.5335 19.498C59.0906 19.0552 58.4841 18.8338 57.714 18.8338C56.963 18.8338 56.3469 19.0648 55.8656 19.5269C55.4035 19.989 55.1724 20.5955 55.1724 21.3464V26.4584C55.1724 26.9013 55.1531 27.2382 55.1146 27.4693C55.0954 27.6811 55.0087 27.9218 54.8547 28.1913C54.6044 28.7112 53.8631 28.9711 52.6308 28.9711C51.4178 28.9711 50.6765 28.7112 50.407 28.1913C50.2722 27.9025 50.1856 27.6522 50.147 27.4404C50.1278 27.2094 50.1182 26.8724 50.1182 26.4296V16.2056C50.1182 15.782 50.1278 15.4643 50.147 15.2525C50.1856 15.0214 50.2818 14.7711 50.4359 14.5016C50.7054 14.0202 51.4467 13.7795 52.6597 13.7795C53.8342 13.7795 54.5563 14.001 54.8258 14.4438C55.0184 14.7711 55.1146 15.1658 55.1146 15.6279C55.1917 15.4932 55.3649 15.3006 55.6345 15.0503C55.9041 14.8 56.164 14.5978 56.4143 14.4438C57.0689 14.001 57.791 13.7795 58.5804 13.7795Z"
        fill="black"
      />
      <path
        d="M73.6869 3.16509C72.6289 3.53085 71.6789 4.4345 71.1607 5.5318C70.7937 6.30636 70.7505 7.03789 70.7505 12.9977C70.7505 19.3878 70.7721 19.6245 71.1823 19.8397C71.4846 20.0118 71.7437 20.0118 72.046 19.8397C72.4562 19.6245 72.4778 19.3878 72.4778 13.1053C72.4778 6.11272 72.4994 5.94059 73.6221 5.123C74.1835 4.71421 74.5721 4.67118 78.6961 4.60663C81.4166 4.5636 83.2518 4.45602 83.4245 4.30541C83.7916 4.00419 83.77 3.5954 83.3598 3.1866C83.0791 2.88538 82.3666 2.84235 78.7824 2.84235C75.7381 2.86387 74.2915 2.94993 73.6869 3.16509Z"
        fill="black"
      />
      <path
        d="M86.6417 3.1866C86.2314 3.5954 86.2098 4.00419 86.5769 4.30541C86.7496 4.45602 88.5849 4.5636 91.3054 4.60663C95.4293 4.67118 95.8179 4.71421 96.3793 5.123C97.5021 5.94059 97.5236 6.11272 97.5236 13.1053C97.5236 19.3878 97.5452 19.6245 97.9555 19.8397C98.2577 20.0118 98.5168 20.0118 98.8191 19.8397C99.2294 19.6245 99.2509 19.3878 99.2509 12.9977C99.2509 7.08092 99.2078 6.30636 98.8407 5.5318C98.3441 4.4345 97.135 3.35873 96.077 3.07902C95.6236 2.94993 93.3997 2.84235 91.111 2.84235C87.6349 2.84235 86.9223 2.9069 86.6417 3.1866Z"
        fill="black"
      />
      <path
        d="M75.0688 12.0947V16.8281H79.8189H84.569V12.0947V7.36127H79.8189H75.0688V12.0947ZM82.8417 12.0947V15.1069H79.8189H76.7961V12.0947V9.08252H79.8189H82.8417V12.0947Z"
        fill="black"
      />
      <path
        d="M78.3938 11.3196C78.329 11.4702 78.3074 12.0726 78.3506 12.6536L78.4154 13.7078L79.6677 13.7724L80.8984 13.8369V12.4169V11.0184H79.7108C78.8904 11.0184 78.4801 11.1044 78.3938 11.3196Z"
        fill="black"
      />
      <path
        d="M86.0806 9.51153V11.6631H86.9442H87.8079V9.51153V7.35997H86.9442H86.0806V9.51153Z"
        fill="black"
      />
      <path
        d="M89.103 8.22138V9.082H91.586H94.069V11.4487V13.8154H94.9327H95.7963V10.5881V7.36076H92.4497H89.103V8.22138Z"
        fill="black"
      />
      <path
        d="M89.103 11.2331V12.0938H90.3985H91.694V11.2331V10.3725H90.3985H89.103V11.2331Z"
        fill="black"
      />
      <path
        d="M86.0806 16.6122V20.0547H89.5352H93.0114L92.9466 16.6552L92.8818 13.2773L89.492 13.2127L86.0806 13.1482V16.6122ZM91.2193 16.6552L91.2841 18.3334H89.5352H87.8079V16.6122V14.8694L89.492 14.934L91.1545 14.9985L91.2193 16.6552Z"
        fill="black"
      />
      <path
        d="M88.2393 16.72V17.9033H89.4268H90.6143V16.72V15.5366H89.4268H88.2393V16.72Z"
        fill="black"
      />
      <path
        d="M94.0693 18.1407V19.4316L94.8898 19.3671L95.6887 19.3025L95.7535 18.0546L95.8182 16.8283H94.933H94.0693V18.1407Z"
        fill="black"
      />
      <path
        d="M75.0688 18.9789V20.0547H75.9325H76.7961V18.9789V17.9031H75.9325H75.0688V18.9789Z"
        fill="black"
      />
      <path
        d="M78.5234 19.4099V20.2705H81.4383H84.3531V19.4099V18.5493H81.4383H78.5234V19.4099Z"
        fill="black"
      />
      <path
        d="M68.2245 21.2809C67.8142 21.4315 67.879 22.5719 68.2892 22.7225C68.7211 22.8946 101.281 22.8946 101.712 22.7225C102.166 22.5503 102.166 21.4315 101.712 21.2594C101.302 21.1088 68.6131 21.1088 68.2245 21.2809Z"
        fill="black"
      />
      <path
        d="M71.0096 24.4007C70.8369 24.5729 70.7505 25.6056 70.7505 27.6711C70.7505 30.1454 70.8369 30.8554 71.1607 31.5654C71.6573 32.6627 72.8664 33.7385 73.9244 34.0182C74.3778 34.1473 76.6017 34.2549 78.8904 34.2549C82.3666 34.2549 83.0791 34.1903 83.3598 33.9106C83.5541 33.7385 83.7052 33.4588 83.7052 33.3082C83.7052 32.6197 83.187 32.5336 79.0199 32.5336C72.7153 32.5336 72.6289 32.4691 72.521 27.8432C72.4778 26.079 72.3482 24.5729 72.2187 24.4223C71.938 24.078 71.355 24.0565 71.0096 24.4007Z"
        fill="black"
      />
      <path
        d="M85.8647 25.0035V25.8641H88.0239H90.183V26.7248C90.183 27.4993 90.1398 27.5854 89.6432 27.5854C89.1682 27.5854 89.1034 27.6715 89.1034 28.446V29.3066H92.4501H95.7967V26.7248V24.1429H94.9331H94.0694V25.8641V27.5854H92.9899H91.9103V25.8641V24.1429H88.8875H85.8647V25.0035Z"
        fill="black"
      />
      <path
        d="M97.7829 24.4007C97.6102 24.5729 97.5238 25.5841 97.5238 27.5635C97.5238 30.1239 97.4591 30.5757 97.092 31.1997C96.3579 32.383 95.6886 32.5336 90.9817 32.5336C86.8146 32.5336 86.2964 32.6197 86.2964 33.3082C86.2964 33.4588 86.4475 33.7385 86.6418 33.9106C86.9225 34.1903 87.635 34.2549 91.1112 34.2549C93.3999 34.2549 95.6238 34.1473 96.0772 34.0182C97.1352 33.7385 98.3443 32.6627 98.8409 31.5654C99.1648 30.8554 99.2511 30.1454 99.2511 27.6711C99.2511 24.5944 99.1432 24.1426 98.3875 24.1426C98.1932 24.1426 97.9341 24.2501 97.7829 24.4007Z"
        fill="black"
      />
      <path
        d="M75.0688 26.9399V29.3066H80.0348H85.0008V28.446V27.5854H80.8985H76.7961V26.0793V24.5732H75.9325H75.0688V26.9399Z"
        fill="black"
      />
      <path
        d="M78.7393 25.6491V26.5098H81.0063H83.2734V25.6491V24.7885H81.0063H78.7393V25.6491Z"
        fill="black"
      />
      <path
        d="M109.267 23.888H118.163C118.606 23.888 118.933 23.9073 119.145 23.9458C119.376 23.965 119.636 24.0517 119.924 24.2057C120.444 24.4753 120.704 25.2262 120.704 26.4584C120.704 27.8062 120.348 28.5957 119.636 28.8267C119.308 28.9422 118.808 29 118.134 29H106.697C105.349 29 104.56 28.6342 104.329 27.9025C104.213 27.5944 104.155 27.1035 104.155 26.4296V10.3715C104.155 9.38956 104.338 8.72529 104.704 8.37872C105.07 8.01288 105.763 7.82997 106.783 7.82997H118.163C118.606 7.82997 118.933 7.84922 119.145 7.88773C119.376 7.90699 119.636 7.99363 119.924 8.14766C120.444 8.41722 120.704 9.16814 120.704 10.4004C120.704 11.7482 120.348 12.5376 119.636 12.7687C119.308 12.8842 118.808 12.942 118.134 12.942H109.267V15.859H114.986C115.429 15.859 115.756 15.8782 115.968 15.9167C116.199 15.936 116.459 16.0226 116.748 16.1767C117.267 16.4462 117.527 17.1972 117.527 18.4294C117.527 19.7772 117.161 20.5666 116.43 20.7977C116.103 20.9132 115.602 20.971 114.928 20.971H109.267V23.888ZM132.45 15.3969C132.566 14.3186 133.326 13.7795 134.732 13.7795C135.483 13.7795 136.041 13.8373 136.407 13.9528C136.773 14.0683 137.023 14.2705 137.158 14.5593C137.312 14.8481 137.399 15.1081 137.418 15.3391C137.456 15.5509 137.476 15.8782 137.476 16.3211V26.4296C137.476 26.8724 137.456 27.2094 137.418 27.4404C137.399 27.6522 137.321 27.9025 137.187 28.1913C136.917 28.6919 136.253 28.9422 135.194 28.9422C134.154 28.9422 133.451 28.8171 133.086 28.5668C132.739 28.2972 132.537 27.9121 132.479 27.4115C131.767 28.432 130.573 28.9422 128.898 28.9422C127.242 28.9422 125.702 28.1817 124.277 26.6606C122.852 25.1395 122.14 23.3778 122.14 21.3753C122.14 19.3536 122.852 17.5919 124.277 16.09C125.721 14.569 127.3 13.8084 129.013 13.8084C129.668 13.8084 130.265 13.9239 130.804 14.155C131.343 14.386 131.719 14.6075 131.93 14.8193C132.142 15.0118 132.315 15.2043 132.45 15.3969ZM127.194 21.4042C127.194 22.0396 127.444 22.6172 127.945 23.1371C128.445 23.6377 129.052 23.888 129.764 23.888C130.477 23.888 131.064 23.6281 131.526 23.1082C132.007 22.5883 132.248 22.0203 132.248 21.4042C132.248 20.7688 132.017 20.1816 131.555 19.6424C131.112 19.1033 130.505 18.8338 129.735 18.8338C128.984 18.8338 128.368 19.1033 127.887 19.6424C127.425 20.1816 127.194 20.7688 127.194 21.4042ZM148.615 18.8915L146.738 18.776V22.7616C146.738 23.2815 146.815 23.657 146.969 23.888C147.142 24.1191 147.45 24.2346 147.893 24.2346C148.355 24.2346 148.702 24.2538 148.933 24.2923C149.183 24.3116 149.443 24.3982 149.713 24.5523C150.155 24.8026 150.377 25.4476 150.377 26.4873C150.377 27.7003 150.107 28.4416 149.568 28.7112C149.279 28.846 149.019 28.9326 148.788 28.9711C148.577 28.9904 148.259 29 147.835 29C145.833 29 144.312 28.5475 143.272 27.6426C142.232 26.7376 141.713 25.2069 141.713 23.0504V18.776C141.347 18.8338 140.952 18.8626 140.528 18.8626C140.105 18.8626 139.749 18.699 139.46 18.3717C139.19 18.0443 139.055 17.486 139.055 16.6965C139.055 15.9071 139.104 15.3391 139.2 14.9925C139.296 14.6267 139.431 14.3668 139.604 14.2127C139.912 13.9624 140.297 13.8373 140.759 13.8373L141.713 13.9528V10.978C141.713 10.5352 141.722 10.2079 141.741 9.99607C141.78 9.78427 141.876 9.55322 142.03 9.30292C142.281 8.82156 143.022 8.58089 144.254 8.58089C145.563 8.58089 146.343 8.93709 146.593 9.6495C146.69 9.95756 146.738 10.4485 146.738 11.1224V13.9528C147.585 13.8758 148.22 13.8373 148.644 13.8373C149.087 13.8373 149.414 13.8565 149.626 13.8951C149.857 13.9143 150.117 14.001 150.406 14.155C150.906 14.4053 151.157 15.1466 151.157 16.3789C151.157 17.5919 150.897 18.3332 150.377 18.6027C150.088 18.7375 149.828 18.8241 149.597 18.8626C149.385 18.8819 149.058 18.8915 148.615 18.8915Z"
        fill="black"
      />
    </svg>
  );
});
