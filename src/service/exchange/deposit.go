package exchange

// status deposit status
type status int8

const (
	statusWaitBtcDeposit status = iota
	statusWaitSkySend
	statusDone
)

var statusString = []string{
	statusWaitBtcDeposit: "waiting_btc_deposit",
	statusWaitSkySend:    "waiting_sky_send",
	statusDone:           "done",
}

// depositInfo records the deposit info
type depositInfo struct {
	Seq        uint64
	UpdatedAt  int64
	Status     status
	SkyAddress string
	BtcAddress string
	Txid       string
}

// only part of the variable are mofiy allowed
func (dpi *depositInfo) updateMutableVar(newDpi depositInfo) {
	dpi.Status = newDpi.Status
	dpi.Txid = newDpi.Txid
	dpi.UpdatedAt = newDpi.UpdatedAt
}
