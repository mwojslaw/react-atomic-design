In search of PERFECT\* design system for react

https://bradfrost.com/blog/post/atomic-web-design/

#### Do I REALLY need a design system?

1. Bro you're using one right now!
2. Why I need more structure? Dance between contexts.
3. Problem with `components/containers` folders.
4. Problem with structuring components by domain.

#### Why atomic design is a great fit for react?

...

#### Migration guide

1. Where to draw the line?
2. Atoms -> ?
   a. Atomic/cannot be splitted
   b. without managing layout/padding/placing
   c. Stateless
   eg. Input, Button
3. Molecules -> ?
   a. Multiple atoms combined together (same or different), but still creating integral whole
   b. Stateless
   eg. InputGroup, Tabs
4. Organisms -> ?
   a. State starts getting through
5. Pages -> ?
6. Templates -> ? (could be easly replaced by common layout components; look at `components/atoms/FlexBox`).
