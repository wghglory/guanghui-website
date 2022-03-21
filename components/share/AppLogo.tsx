import {motion} from 'framer-motion';
import Link from 'next/link';

import {svgVariants} from '@/lib/motion';

export default function AppLogo() {
  return (
    <Link href="/">
      <a className="text-center text-black dark:text-white">
        <svg viewBox="0 0 158 80" fill="none" className="inline-block h-[60px]">
          <mask id="path-1" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M88 13C89.2342 10.8326 91 7.85779 91 6C91 4.9695 90 5 89 5C82.7674 5 78.788 8.57341 72 16.5C65.8291 23.7454 61.5 32.0826 61.5 40.6285C61.5 49.484 63.3291 49 69.5 49C81.3479 49 91.9684 36.5986 93 31.5C93 30.5711 93.414 30.4725 91.9951 30.4725C90.5752 30.4725 83.4764 32.0845 78.8478 33.8804C77.3584 34.4583 80.8275 28.9954 82 28.5C89.2195 25.3418 96.5 26.6331 96.5 30.4725C96.5 38.3991 80.3323 54.5 68.5459 54.5C60.3386 54.5 57.5 47.7501 57.5 40.6285C57.5 32.5781 60.0917 23.9083 68.2373 13.4427C74.3465 5.63991 82.9238 0.5 89.4651 0.5C92.0567 0.5 95 1.51835 95 3.5C95 5.54359 92.8638 11.0092 92 12C91.1362 12.867 87.5065 13.805 88 13Z"
            />
          </mask>
          <motion.path
            initial="start"
            animate="end"
            variants={svgVariants}
            stroke="url(#paint0_linear_425_579)"
            strokeWidth="8"
            mask="url(#path-1)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M88 13C89.2342 10.8326 91 7.85779 91 6C91 4.9695 90 5 89 5C82.7674 5 78.788 8.57341 72 16.5C65.8291 23.7454 61.5 32.0826 61.5 40.6285C61.5 49.484 63.3291 49 69.5 49C81.3479 49 91.9684 36.5986 93 31.5C93 30.5711 93.414 30.4725 91.9951 30.4725C90.5752 30.4725 83.4764 32.0845 78.8478 33.8804C77.3584 34.4583 80.8275 28.9954 82 28.5C89.2195 25.3418 96.5 26.6331 96.5 30.4725C96.5 38.3991 80.3323 54.5 68.5459 54.5C60.3386 54.5 57.5 47.7501 57.5 40.6285C57.5 32.5781 60.0917 23.9083 68.2373 13.4427C74.3465 5.63991 82.9238 0.5 89.4651 0.5C92.0567 0.5 95 1.51835 95 3.5C95 5.54359 92.8638 11.0092 92 12C91.1362 12.867 87.5065 13.805 88 13Z"
          />
          <motion.path
            initial="start"
            animate="end"
            variants={svgVariants}
            d="M8.94296 68.0796C8.84826 67.7728 8.71758 67.4982 8.55091 67.2557C8.38804 67.0095 8.19107 66.7993 7.96001 66.625C7.73273 66.4508 7.47137 66.3201 7.17591 66.233C6.88046 66.1421 6.55849 66.0966 6.21001 66.0966C5.58501 66.0966 5.02819 66.2538 4.53955 66.5682C4.05091 66.8826 3.66644 67.3447 3.38614 67.9546C3.10963 68.5607 2.97137 69.2993 2.97137 70.1705C2.97137 71.0493 3.10963 71.7936 3.38614 72.4035C3.66266 73.0133 4.04713 73.4773 4.53955 73.7955C5.03198 74.1099 5.60394 74.2671 6.25546 74.2671C6.84637 74.2671 7.35773 74.1535 7.78955 73.9262C8.22516 73.6989 8.56038 73.3769 8.79523 72.9603C9.03008 72.5398 9.14751 72.0474 9.14751 71.483L9.62478 71.5569H6.46569V69.9091H11.1873V71.3069C11.1873 72.3031 10.9752 73.1648 10.5509 73.8921C10.1267 74.6194 9.54334 75.18 8.80091 75.5739C8.05849 75.9641 7.20622 76.1591 6.2441 76.1591C5.17213 76.1591 4.23084 75.9186 3.42023 75.4375C2.61341 74.9527 1.98273 74.2652 1.52819 73.375C1.07743 72.4811 0.852051 71.4205 0.852051 70.1932C0.852051 69.2538 0.984627 68.4148 1.24978 67.6762C1.51872 66.9375 1.89372 66.3107 2.37478 65.7955C2.85584 65.2766 3.42023 64.8826 4.06796 64.6137C4.71569 64.341 5.42023 64.2046 6.1816 64.2046C6.82554 64.2046 7.42591 64.2993 7.98273 64.4887C8.53955 64.6743 9.03387 64.9394 9.46569 65.2841C9.90129 65.6288 10.2592 66.0379 10.5396 66.5114C10.8199 66.9849 11.0036 67.5076 11.0907 68.0796H8.94296ZM21.8409 64.3637H23.9488V71.966C23.9488 72.7993 23.7518 73.5322 23.3579 74.1648C22.9678 74.7974 22.4185 75.2917 21.7102 75.6478C21.0018 76 20.1742 76.1762 19.2272 76.1762C18.2765 76.1762 17.4469 76 16.7386 75.6478C16.0303 75.2917 15.481 74.7974 15.0909 74.1648C14.7007 73.5322 14.5056 72.7993 14.5056 71.966V64.3637H16.6136V71.7898C16.6136 72.2747 16.7196 72.7065 16.9318 73.0853C17.1477 73.4641 17.4507 73.7614 17.8409 73.9773C18.231 74.1894 18.6931 74.2955 19.2272 74.2955C19.7613 74.2955 20.2234 74.1894 20.6136 73.9773C21.0075 73.7614 21.3106 73.4641 21.5227 73.0853C21.7348 72.7065 21.8409 72.2747 21.8409 71.7898V64.3637ZM29.0143 76H26.7643L30.8609 64.3637H33.4632L37.5655 76H35.3155L32.2075 66.75H32.1166L29.0143 76ZM29.0882 71.4375H35.2246V73.1307H29.0882V71.4375ZM49.9406 64.3637V76H48.0656L42.5827 68.0739H42.4861V76H40.3781V64.3637H42.2645L47.7418 72.2955H47.844V64.3637H49.9406ZM61.313 68.0796C61.2183 67.7728 61.0876 67.4982 60.9209 67.2557C60.758 67.0095 60.5611 66.7993 60.33 66.625C60.1027 66.4508 59.8414 66.3201 59.5459 66.233C59.2505 66.1421 58.9285 66.0966 58.58 66.0966C57.955 66.0966 57.3982 66.2538 56.9095 66.5682C56.4209 66.8826 56.0364 67.3447 55.7561 67.9546C55.4796 68.5607 55.3414 69.2993 55.3414 70.1705C55.3414 71.0493 55.4796 71.7936 55.7561 72.4035C56.0327 73.0133 56.4171 73.4773 56.9095 73.7955C57.402 74.1099 57.9739 74.2671 58.6255 74.2671C59.2164 74.2671 59.7277 74.1535 60.1595 73.9262C60.5952 73.6989 60.9304 73.3769 61.1652 72.9603C61.4001 72.5398 61.5175 72.0474 61.5175 71.483L61.9948 71.5569H58.8357V69.9091H63.5573V71.3069C63.5573 72.3031 63.3452 73.1648 62.9209 73.8921C62.4967 74.6194 61.9133 75.18 61.1709 75.5739C60.4285 75.9641 59.5762 76.1591 58.6141 76.1591C57.5421 76.1591 56.6008 75.9186 55.7902 75.4375C54.9834 74.9527 54.3527 74.2652 53.8982 73.375C53.4474 72.4811 53.222 71.4205 53.222 70.1932C53.222 69.2538 53.3546 68.4148 53.6198 67.6762C53.8887 66.9375 54.2637 66.3107 54.7448 65.7955C55.2258 65.2766 55.7902 64.8826 56.438 64.6137C57.0857 64.341 57.7902 64.2046 58.5516 64.2046C59.1955 64.2046 59.7959 64.2993 60.3527 64.4887C60.9096 64.6743 61.4039 64.9394 61.8357 65.2841C62.2713 65.6288 62.6292 66.0379 62.9095 66.5114C63.1899 66.9849 63.3736 67.5076 63.4607 68.0796H61.313ZM66.8756 76V64.3637H68.9836V69.2898H74.3756V64.3637H76.4893V76H74.3756V71.0569H68.9836V76H66.8756ZM87.3971 64.3637H89.5051V71.966C89.5051 72.7993 89.3081 73.5322 88.9142 74.1648C88.524 74.7974 87.9748 75.2917 87.2664 75.6478C86.5581 76 85.7304 76.1762 84.7835 76.1762C83.8327 76.1762 83.0032 76 82.2948 75.6478C81.5865 75.2917 81.0373 74.7974 80.6471 74.1648C80.257 73.5322 80.0619 72.7993 80.0619 71.966V64.3637H82.1698V71.7898C82.1698 72.2747 82.2759 72.7065 82.488 73.0853C82.7039 73.4641 83.007 73.7614 83.3971 73.9773C83.7873 74.1894 84.2494 74.2955 84.7835 74.2955C85.3176 74.2955 85.7797 74.1894 86.1698 73.9773C86.5638 73.7614 86.8668 73.4641 87.0789 73.0853C87.291 72.7065 87.3971 72.2747 87.3971 71.7898V64.3637ZM95.1842 64.3637V76H93.0763V64.3637H95.1842ZM106.444 76L103.16 64.3637H105.427L107.524 72.9148H107.632L109.871 64.3637H111.933L114.177 72.9205H114.28L116.376 64.3637H118.643L115.359 76H113.28L110.95 67.8353H110.859L108.524 76H106.444ZM121.786 76H119.536L123.632 64.3637H126.234L130.337 76H128.087L124.979 66.75H124.888L121.786 76ZM121.859 71.4375H127.996V73.1307H121.859V71.4375ZM142.712 64.3637V76H140.837L135.354 68.0739H135.257V76H133.149V64.3637H135.036L140.513 72.2955H140.615V64.3637H142.712ZM154.084 68.0796C153.99 67.7728 153.859 67.4982 153.692 67.2557C153.529 67.0095 153.332 66.7993 153.101 66.625C152.874 66.4508 152.613 66.3201 152.317 66.233C152.022 66.1421 151.7 66.0966 151.351 66.0966C150.726 66.0966 150.169 66.2538 149.681 66.5682C149.192 66.8826 148.808 67.3447 148.527 67.9546C148.251 68.5607 148.113 69.2993 148.113 70.1705C148.113 71.0493 148.251 71.7936 148.527 72.4035C148.804 73.0133 149.188 73.4773 149.681 73.7955C150.173 74.1099 150.745 74.2671 151.397 74.2671C151.988 74.2671 152.499 74.1535 152.931 73.9262C153.366 73.6989 153.702 73.3769 153.936 72.9603C154.171 72.5398 154.289 72.0474 154.289 71.483L154.766 71.5569H151.607V69.9091H156.329V71.3069C156.329 72.3031 156.116 73.1648 155.692 73.8921C155.268 74.6194 154.685 75.18 153.942 75.5739C153.2 75.9641 152.347 76.1591 151.385 76.1591C150.313 76.1591 149.372 75.9186 148.561 75.4375C147.755 74.9527 147.124 74.2652 146.669 73.375C146.219 72.4811 145.993 71.4205 145.993 70.1932C145.993 69.2538 146.126 68.4148 146.391 67.6762C146.66 66.9375 147.035 66.3107 147.516 65.7955C147.997 65.2766 148.561 64.8826 149.209 64.6137C149.857 64.341 150.561 64.2046 151.323 64.2046C151.967 64.2046 152.567 64.2993 153.124 64.4887C153.681 64.6743 154.175 64.9394 154.607 65.2841C155.043 65.6288 155.4 66.0379 155.681 66.5114C155.961 66.9849 156.145 67.5076 156.232 68.0796H154.084Z"
            fill="currentColor"
          />
          <defs>
            <linearGradient id="paint0_linear_425_579" x1="57" y1="28" x2="96" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#945F50" />
              <stop offset="0.46875" stopColor="#FCC5B3" />
              <stop offset="1" stopColor="#945F50" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </Link>
  );
}
