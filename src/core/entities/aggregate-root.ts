// eslint-disable-next-line prettier/prettier
import { DomainEvent } from '../events/domain-event'
import { DomainEvents } from '../events/domain-events'
import { Entity } from './entity'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  clearEvents() {
    throw new Error('Method not implemented.')
  }

  private _domaninEvents: DomainEvent[] = []

  get domaninEvents(): DomainEvent[] {
    return this._domaninEvents
  }

  get domainEvents(): DomainEvent[] {
    return this._domaninEvents
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domaninEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }
}
