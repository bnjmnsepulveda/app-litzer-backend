import "reflect-metadata";
import { Container, Service, Inject } from "typedi";


interface Repository {
    create(entity: string): any;
}

interface Service {
    save(entity: string): any;
}

interface Controller {
    post(entity: any): any;
}

@Service()
class PersonRepository implements Repository {

    create(entity: string) {
        console.log('create', entity)
    }

}

@Service()
class PersonService implements Service {

    constructor(@Inject(() => PersonRepository) private repository: Repository) { }

    save(entity: string) {
        console.log('save', entity)
        this.repository.create(entity)
    }

}

@Service()
class PersonController implements Controller {

    constructor(@Inject(() => PersonService) private service: Service) { }

    post(entity: any) {
        console.log('post', entity)
        this.service.save(entity)
    }

}

const repo = {
    create(e: string) {
        console.log('mock')
    }
}
const srv = new PersonService(repo)

const service = Container.get(PersonController)

srv.save('benjamin')