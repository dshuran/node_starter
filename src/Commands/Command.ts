/**
 * Базовый класс команды, которую можно выполнить (определённый набор действий в консоли)
 */
export abstract class Command {

    public abstract run(): void;

    public abstract getName(): string;

    public abstract getAlias(): string;
}