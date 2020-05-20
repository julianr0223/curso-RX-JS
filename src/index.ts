import { Observable, Observer } from 'rxjs';

const obs$ = new Observable<string>(subs => {
    subs.next('Hola')
    subs.next('que hubo')

    subs.next('todo bien')

    // ejemplo error
    const obj = undefined;
    console.log(obj.nombre)

    subs.complete()

    subs.next('este no se emitiría')
});

// forma 1: solo el subscribe
console.info('OBSERVABLE 1')
obs$.subscribe(console.log);

// forma 2: desglozando con el next, error y complete
console.info('\nOBSERVABLE 2')
obs$.subscribe(
    valor => console.log(`next: ${valor}`),
    error => console.warn(error),
    () => console.info('El observable ha sido completado')
);

// forma 3: creando un observer
console.info('\nOBSERVABLE 3')
const observer: Observer<string> = {
    next: valor => console.log(`next [obs]: ${valor}`),
    error: error => console.warn('error [obs]'),
    complete: () => console.info('complete [obs]: El observable ha sido completado')
}

obs$.subscribe(observer);