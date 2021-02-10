import { withModalRootContext } from '@vkontakte/vkui';

class SelectModal extends Component {
    state = {
        items: [],
        isLoading: true,
    };

    static propTypes = {
        // Сообщает ModalRoot, что высота модальной страницы могла измениться
        updateModalHeight: PropTypes.func,
    };

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems() {
        fetch('').then((r) => r.json()).then((items) => {
            this.setState({
                isLoading: false,
                items,
            }, () => {
                // После установки стейта и перерисовки компонента SelectModal сообщим ModalRoot об изменениях
                this.props.updateModalHeight();
            });
        });
    }

    render() {
        return (
            <div className="SelectModal">
                {this.state.isLoading && <Spinner />}
                {!this.state.isLoading &&
                <Group>
                    {this.state.items.map((item) => (
                        <Cell key={item.id}>
                            {item.title}
                        </Cell>
                    ))}
                </Group>
                }
            </div>
        );
    }
}

export default withModalRootContext(SelectModal);