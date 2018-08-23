# Disarray

Disarray is an esoteric language with only one data type: arrays.

~~~
[] → 0
[[]] → [0] → 1
[[] [[]]] → [0 [0]] → [0 1] → 2
[[] [[]] [[[], []]]] → [0 [0] [[0 0]]] → [0 1 [2]] → [0 1 1] → 3
~~~


## API

#### type Blob → number | Blob[]

A Blob is either a number, or an array of Blobs. A number has a depth of zero; an array of numbers has depth 1, and so on.

#### type Disarray → [] | Disarray[]

A Blob is either an empty array, or an array of Disarrays. An empty array has a depth of one; an array of empty arrays has a depth of two, and so on.

#### hydrate(blob: Blob) → Disarray

Converts a Blob into a Disarray. It is always hydrated to its maximum depth.

#### dehydrate(dis: Disarray, depth: number = 0) → Blob

Converts a Disarray into a Blob at a certain depth. A depth of zero produces a single number; a depth of one produces an array of numbers, and so on. The number will be the length of that Disarray.

#### depth(dis: Disarray) → number

Returns the maximum depth of a Disarray. An empty array has depth one.

#### valid(dis: Disarray) → boolean

Returns true if the value is a valid Disarray.


## License

Licensed under the MIT license. See [LICENSE.md](LICENSE.md).

Copyright (c) 2018, zenoamaro (<zenoamaro@gmail.com>)
