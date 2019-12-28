/* eslint-disable import/prefer-default-export */
export const isNullOrEmpty = value => {
  if (value === null || value.length === 0) {
    return true;
  }
  return false;
};

export const matchNumToString = number => {
  switch (Number(number)) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';

    default:
  }

  return 'zero';
};
