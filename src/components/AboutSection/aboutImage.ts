const aboutImage = {
    src: '/images/me.png',
    placeholder: 'blur',
    blurDataURL:
        'data:image/jpeg;base64,/9j/2wBDAHJPVmRWR3JkXWSBeXKIq/+6q52dq//6/8//////////////////////////////////////////////////////2wBDAXmBgauWq/+6uv//////////////////////////////////////////////////////////////////////////wAARCAGmAXgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAoEAEBAAICAQQCAgIDAQAAAAAAAQIRITEDEjJBUWFxBCIzgRMjQpH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AO4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm4oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJbqboFsk3emL5sfjdcvJ5LnNTpztB0/5cpvaTy5fbG+NG5voHfHz/cbx8uN+dft5LZv6N66B7ZZZuVXh9SS2A948Myv3Wp5MsesqD2DzTz5fMldMfNje+AdRJdzcUAAAAAAAAAAAAAAAAAAAAAAAAA1waWcgg0mgQWxAAAHHzZc654dnDy6t75Byt5QsQFt+Cnwk4ATmKk2AjVTWgDaALtWV2Dr4vJ6Lq+16e3idMPJljxvgHqGccplGgAAAAAAAAAAAAAAAAAAAAFkJFAAAAAZrQDItifgGcrqcduOVuV5d8p8uMnqv4+wcz02/Dv6ZPhdJo4eis3Gx6dM2Grjz+k07ek9Jpjjo1XW4p6TTHLXKWOtxZsVGLDTWjX0DKrpNaB28WW5r5nLvOY8eN9N29Xjy3LPoGwAAAAAAAAAAAAAAAAACdiwFAAAAAAAAZvbVZBLNwmMigJ+000JgwLe0RYlQBTtOIqWgl6csnVzzWJWAFQW8oArv4O687r4MtZaoPSAAAAAAAAAAAAAAAAAAsRoAAAAAAAABKrNATZYiaNJs5SzQCUSo1EBLQLUABjLlqs3ohXMarLTIAAsuruJAHrxy3jLF25eG/119OgLs2gC7XbIDW1YalBQAAAAAAAAAGmZ20AAAAAAAACW6RnyW/DMyy3yDoMzLbQCUtYtvwlFL0zvJLtBWU3flRoABLNpWksBhL0t7GmWBdICfKpVB18F/tY7OHh97uAAAAAACytMLKDQAAAAAAAEaSKAAAAAAB05/wDLj8S1rP2X9OeM1jNdg1ct/wDmxN6WZb+OS8gzLpqVjPXp2x/bUqYOtrPfXKY881udGCay+iytxjK3lRjLhz9cbyvDn6PyitzJY5+in9sfsw11K5zyVqZww1KhbLEVFZvbSXoGQAdPD73dx8E+XYAAAAAABUAaisrAUAAAAAFnSgAAAAAACZe2/pjDqfp0vTnh1r5gLZx+U00A4+bjHU7vDUx9OElPd5N/E6KlWMTrbpHLq2O2KohYtgDlnONfk1prLnOT65pUqxlNKIqemJcZpovQOVxTlvSzldTGJu1r0Za6a4hbTTHG8djp5ZxL8p45vJUdsJqRpOjYKJtYAAAAAAAsRYDQAAAAANAAAAAAAAM3CW7nFaAc/wC33Kn9rxuT9N1AS8ThitZVmZ471vllqMZcVvG340zk14+tGo1vL8FlvdWxFCSRlq9MorIAAFBKlumunO+4GsLu89rZySLdeoGfL8RvDH04s4z15er4ddcNMsgALEAaAAAAAAABqdCQBoAAAGgAAAAAAAAAZvaVb2AzcWLhHTbLKsen4bxnpANavTIBEvaAKyAAndUBL9JMVnNW8AThnO7/AKzumeWuu2vFhrmrEreM9OOlBUZFqALEWdgoAAAAAAAKADQACxFgKAAAAAAAAADN7Ytvq03e0sSjF2zbY2zYjSeqfpuXbn6G8MZiJVqbW/LIsAS0EAASKAmlDW+IFTx4+rK5Xp1JJJqDTIACXtGqyAsFAAAAAAAAAABsABYizoFAAAAAAAAABKi1ATSVpm3aUQEqNFqCW7AtQAEtNoABOwaawnyy3j0sSqAqAACaUBJFAAAAAAAAAAAGwAFnSNAAAAAAAAAAlBLym1QE2myyz8oysRLfoqCgAG0t4UBkXRoEkahJoAbx6YawWJWgFQAAAtACUAAAAAAAAAABsABZ0izoFAAAAAAAAZW1AAAGbq5en5TPOYT8s/x+bllfkGrjyzZ+GvmwZWOY6aSwVgWxAAAAAGsZ2z+m+McViVjx+Td9OXbo8svO49GGczn5VGgS0F2yACyoA0JtQAAAAAAAAbAAWdIs6BQAAAAABLlJ3XPLz4zrkG6PPfPl8SRzueV7oPVc8Z3Y55+b4x/+uGzYLlb3e3q/jzXin5eSvX4f8UBny8ZSxZdteTHeLjjUqx0L0kqorN6ZbvCAzpdKAmkaamPp/YJjNc3tz82Wsdfbpa82d9WVaZRZbjdxAHeeWWc8VqWXqvMSg9I4zyZT8tzyY3vgGwAFlQBoZa2AAAAAADYACxFgKMZeSYzlxy82V64gPRbJ3dOd82M65ea5bvPKbB3vnvxNOd82V/8ATmAtyt7qAAAAAA9f8f8Axf7eR7PB/jB0ebOenL8PSxlJnwDjK0zZcbqm2Wmg2sloIslqyNriazqSBUVHPzZaxcG/Ld5a+mAAAD5NpvYKACzK49V0nl+45APRM8b1VeZqZ5Tqg7jnPL9xuZTLqg1KrKygoAAANgAOPl8uv649/brldY2/Tx3mgu+Oe02VAAAAAAAAAAAHs8H+N43ql9Pixn2C5ZW/oxrKz7B0ynqx/Lh074ufkn9/2lWGGM1utWhqqiw2a1EvAF5ZyusdtyOPmusbAcO6AAACaUAAgAAAAAADePks75jrjlMpw86y3G7gPSsrjhnbdV0BoSUB0ABz81/63lejz/DzgAAAAAAAAAAAAO/xP04PRJuA3OlZx6bgGPaZe5rpPnYJpZNKmwLdJOadqCvN/I98n4el4/JfVnaDIAAACX6VJzQUAAAAAAAACdAs4r0PM9M6gAAOoJldY2/QOHmu89fTi2wAKgAAAAAAAAAAD0Y9PO74e2A6YtRnHtsBLeFSgnNXSmuAASgnkvpwteN6P5GX9ZPt5wAAAASrE7qgAAAAAAAW6Aok7X5AejH2z9PO9GPtn6BQAdXPzXXj/bo5ee8YwHFhqsgtRfhAAAAAAAAAAAHfx+yODt4vaDrj218s4tUFL2ADSRaDKVWMrqW/QOHmu8/1w5rbu7QAAAt0J3QWdAAAAAAAAJe1rMBqdJFvSSgrv4/ZHCcuviy/rr6B0E2A7OH8juO7z+e7y19QHLfCACzpFnZQQAAAAAAAAAB18Py5Oni9wO8avTMa+AWCTpQWG+SdFArh5rrDX279x5f5F3nr6ByAAAASFUAAAAAAAAEpEAAAadPFztyldPF7wdpAAdenkyvqtv29HkuvHXm+QZFqALUX4BAAAAAAAAAAGsLrOMrOLAemNTqsxqdUFnSpFBZ0VYmX2BOnizvqzt/L1eTL0+LKvGAAABegSc1UigAAAAAAJTaUAAAAFnDWN1lKw0Dv6hkB18/s/wBvK9Pn9s/bz3sF7jKy6O5sEWfSE9wAvOyggAAAAAAAAAPThdyNxy8V/rHWdgTtpJ3VBpnJZUyBw/kXWMxcG/Nd+S/hgAABO6tSAoAAAAAB0F6BkAAAAABploHadSiYe2AN+fLmYuF7bzu8rWL2CAAJO1Sg2XpMaoMi3tAAAAAAAAAdfDeLHfH4efxXmx3x7Bqd1UnuqgsZ8l1NtTpz/kXXj/NB5OwAAAS9qk7UAAAAAABlbUAAAXRpdgyUAWLtlZ0Dt4/aHj9oDKXoAZAAL0AGNanQAVkAAAAAAAAAa8fvj0Y9gDc7qgCzmPP/ACbvOT6gA4AAJQAnagAAAAAADIACwAWzaWaAEABdKAOnj9v+wAf/2Q==',
} as const;

export default aboutImage;