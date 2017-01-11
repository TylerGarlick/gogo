import S from 'string';

export const toDash = (value = '') => S(value).dasherize().s;

export const toFirstUpper = (value = '') => S(value).titleCase().s;

export const toFirstLower = (value = '') => [...value].map((value, index) => index === 0 ? value.toLocaleLowerCase() : value)
                                                      .join('');
